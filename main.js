const { app, BrowserWindow, ipcMain, shell, dialog, Notification } = require('electron');
const path = require('path');
const fs   = require('fs');

let dataFilePath;
let settingsFilePath;
let backupDir;
let cvDir;
let mainWindow;
let splashWindow;

// ── File paths ───────────────────────────────────────────────────────────────

function setupPaths() {
  const userData = app.getPath('userData');
  dataFilePath     = path.join(userData, 'jobtera-applications.json');
  settingsFilePath = path.join(userData, 'jobtera-settings.json');
  backupDir        = path.join(userData, 'backups');
  cvDir            = path.join(userData, 'cvs');
  if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
  if (!fs.existsSync(cvDir))     fs.mkdirSync(cvDir, { recursive: true });
}

// ── Data ─────────────────────────────────────────────────────────────────────

function readData() {
  try {
    if (fs.existsSync(dataFilePath))
      return JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  } catch (e) { console.error('readData:', e); }
  return [];
}

function writeData(data) {
  try { fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8'); }
  catch (e) { console.error('writeData:', e); }
}

// ── Settings ─────────────────────────────────────────────────────────────────

function readSettings() {
  try {
    if (fs.existsSync(settingsFilePath))
      return { theme:'light', monthlyGoal:0, accentColor:'blue', followUpDays:7, onboardingDone:false,
               ...JSON.parse(fs.readFileSync(settingsFilePath, 'utf8')) };
  } catch {}
  return { theme: 'light', monthlyGoal: 0, accentColor: 'blue', followUpDays: 7, onboardingDone: false };
}

function writeSettings(s) {
  try { fs.writeFileSync(settingsFilePath, JSON.stringify(s, null, 2), 'utf8'); }
  catch (e) { console.error('writeSettings:', e); }
}

// ── Auto Backup ──────────────────────────────────────────────────────────────

function autoBackup() {
  if (!fs.existsSync(dataFilePath)) return;
  const today      = new Date().toISOString().split('T')[0];
  const backupFile = path.join(backupDir, `jobtera-${today}.json`);
  if (!fs.existsSync(backupFile)) {
    try { fs.copyFileSync(dataFilePath, backupFile); } catch {}
  }
  try {
    const files = fs.readdirSync(backupDir)
      .filter(f => f.startsWith('jobtera-') && f.endsWith('.json'))
      .sort().reverse();
    files.slice(7).forEach(f => fs.unlinkSync(path.join(backupDir, f)));
  } catch {}
}

// ── Notifications ────────────────────────────────────────────────────────────

function checkUpcomingInterviews() {
  if (!Notification.isSupported()) return;
  const data     = readData();
  const today    = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  data.filter(a => a.interviewDate === today || a.interviewDate === tomorrow)
    .forEach(a => {
      const when = a.interviewDate === today ? 'Bugün' : 'Yarın';
      new Notification({
        title: 'Jobtera — Yaklaşan Mülakat',
        body:  `${when}: ${a.company} — ${a.position}`
      }).show();
    });
}

function checkFollowUps() {
  if (!Notification.isSupported()) return;
  const { followUpDays = 7 } = readSettings();
  if (!followUpDays) return;
  const data  = readData();
  const today = new Date();
  const cutoff = new Date(today.getTime() - followUpDays * 86400000).toISOString().split('T')[0];
  const stale = data.filter(a =>
    a.status === 'Başvuruldu' && a.date && a.date <= cutoff
  );
  if (stale.length) {
    new Notification({
      title: 'Jobtera — Takip Zamanı!',
      body: `${stale.length} başvuruda ${followUpDays} gündür yanıt yok.`
    }).show();
  }
}

// ── Splash Window ────────────────────────────────────────────────────────────

function createSplashWindow() {
  splashWindow = new BrowserWindow({
    width: 600, height: 420,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    hasShadow: false,
    resizable: false,
    center: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  splashWindow.loadFile(path.join(__dirname, 'renderer', 'splash.html'));
}

// ── Main Window ──────────────────────────────────────────────────────────────

function createMainWindow() {
  const s = readSettings();
  mainWindow = new BrowserWindow({
    width: 1200, height: 800,
    minWidth: 900, minHeight: 600,
    frame: false,
    show: false,
    backgroundColor: s.theme === 'dark' ? '#0F172A' : '#F8FAFC',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));
}

// ── App lifecycle ────────────────────────────────────────────────────────────

app.whenReady().then(() => {
  setupPaths();
  autoBackup();
  createSplashWindow();
  createMainWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// ── IPC: Splash ───────────────────────────────────────────────────────────────

ipcMain.handle('splash:ready', () => {
  setTimeout(() => {
    if (mainWindow) mainWindow.show();
    setTimeout(() => {
      splashWindow?.close();
      splashWindow = null;
      setTimeout(checkUpcomingInterviews, 1200);
      setTimeout(checkFollowUps, 3000);
    }, 300);
  }, 2400);
});

// ── IPC: Data ─────────────────────────────────────────────────────────────────

ipcMain.handle('data:getAll', () => readData());

ipcMain.handle('data:save', (_, application) => {
  const data = readData();
  const idx  = data.findIndex(a => a.id === application.id);
  const now  = new Date().toISOString();

  if (idx !== -1) {
    const old = data[idx];
    let history = application.history || old.history || [];
    if (old.status !== application.status) {
      history = [...history, { status: application.status, date: now.split('T')[0] }];
    }
    data[idx] = { ...application, history, updatedAt: now };
  } else {
    const history = [{ status: application.status, date: application.date || now.split('T')[0] }];
    data.unshift({ ...application, history, createdAt: now, updatedAt: now });
  }
  writeData(data);
  return data;
});

ipcMain.handle('data:delete', (_, id) => {
  const data = readData().filter(a => a.id !== id);
  writeData(data);
  return data;
});

ipcMain.handle('data:deleteMany', (_, ids) => {
  const set  = new Set(ids);
  const data = readData().filter(a => !set.has(a.id));
  writeData(data);
  return data;
});

ipcMain.handle('data:updateStatus', (_, { id, status }) => {
  const data  = readData();
  const idx   = data.findIndex(a => a.id === id);
  const today = new Date().toISOString().split('T')[0];
  if (idx !== -1 && data[idx].status !== status) {
    if (!data[idx].history) data[idx].history = [];
    data[idx].history = [...data[idx].history, { status, date: today }];
    data[idx].status    = status;
    data[idx].updatedAt = new Date().toISOString();
    writeData(data);
  }
  return data;
});

ipcMain.handle('data:updateManyStatus', (_, { ids, status }) => {
  const set   = new Set(ids);
  const data  = readData();
  const today = new Date().toISOString().split('T')[0];
  data.forEach(a => {
    if (set.has(a.id) && a.status !== status) {
      if (!a.history) a.history = [];
      a.history   = [...a.history, { status, date: today }];
      a.status    = status;
      a.updatedAt = new Date().toISOString();
    }
  });
  writeData(data);
  return data;
});

ipcMain.handle('data:exportCsv', () => {
  const data = readData();
  if (!data.length) return null;
  const headers = ['Şirket','Pozisyon','Konum','Tarih','Durum','Öncelik','Etiketler',
    'Mülakat Tarihi','Maaş Min','Maaş Max','Para Birimi','Bağlantı Adı','Bağlantı Email','URL','Notlar'];
  const rows = data.map(a => [
    a.company, a.position, a.location||'', a.date, a.status, a.priority||'',
    (a.tags||[]).join('; '), a.interviewDate||'', a.salaryMin||'', a.salaryMax||'',
    a.currency||'', a.contactName||'', a.contactEmail||'', a.url||'',
    (a.notes||'').replace(/\n/g,' ')
  ].map(v => `"${String(v).replace(/"/g,'""')}"`).join(','));
  return [headers.join(','), ...rows].join('\n');
});

ipcMain.handle('data:importBatch', (_, apps) => {
  const existing    = readData();
  const existingIds = new Set(existing.map(a => a.id));
  const newItems    = apps.filter(a => a.id && !existingIds.has(a.id));
  const merged      = [...newItems, ...existing];
  writeData(merged);
  return { added: newItems.length, data: merged };
});

// ── IPC: Dialog ───────────────────────────────────────────────────────────────

ipcMain.handle('dialog:openFile', async (_, options) => {
  const result = await dialog.showOpenDialog(mainWindow, options);
  if (!result.canceled && result.filePaths[0]) {
    try {
      return { content: fs.readFileSync(result.filePaths[0], 'utf8'), filePath: result.filePaths[0] };
    } catch { return null; }
  }
  return null;
});

// ── IPC: Settings ─────────────────────────────────────────────────────────────

ipcMain.handle('settings:get',  ()  => readSettings());
ipcMain.handle('settings:save', (_, s) => writeSettings(s));

// ── IPC: Window ───────────────────────────────────────────────────────────────

ipcMain.handle('window:minimize',    () => mainWindow?.minimize());
ipcMain.handle('window:maximize',    () => { mainWindow?.isMaximized() ? mainWindow.unmaximize() : mainWindow?.maximize(); });
ipcMain.handle('window:close',       () => mainWindow?.close());
ipcMain.handle('window:isMaximized', () => mainWindow?.isMaximized() ?? false);

// ── IPC: Shell ────────────────────────────────────────────────────────────────

ipcMain.handle('shell:openUrl', (_, url) => {
  if (url && /^https?:\/\//.test(url)) shell.openExternal(url);
});
ipcMain.handle('shell:showDataInFolder', () => shell.showItemInFolder(dataFilePath));
ipcMain.handle('shell:openBackupFolder', () => shell.openPath(backupDir));

// ── IPC: CV Management ────────────────────────────────────────────────────────

ipcMain.handle('cv:pick', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: 'CV Dosyası Seç',
    filters: [
      { name: 'Belgeler', extensions: ['pdf', 'doc', 'docx'] },
      { name: 'Tüm Dosyalar', extensions: ['*'] }
    ],
    properties: ['openFile']
  });
  return result.canceled ? null : result.filePaths[0];
});

ipcMain.handle('cv:save', (_, { srcPath, displayName }) => {
  const ext      = path.extname(srcPath) || '.pdf';
  const safe     = displayName.replace(/[<>:"/\\|?*]/g, '_').trim() || 'CV';
  const fileName = `${safe}${ext}`;
  const dest     = path.join(cvDir, fileName);
  fs.copyFileSync(srcPath, dest);
  const stats = fs.statSync(dest);
  return { fileName, displayName: safe, size: stats.size, addedAt: new Date().toISOString() };
});

ipcMain.handle('cv:list', () => {
  if (!fs.existsSync(cvDir)) return [];
  return fs.readdirSync(cvDir)
    .filter(f => /\.(pdf|doc|docx)$/i.test(f))
    .map(f => {
      const fp    = path.join(cvDir, f);
      const stats = fs.statSync(fp);
      return {
        fileName:    f,
        displayName: path.basename(f, path.extname(f)),
        size:        stats.size,
        addedAt:     stats.birthtime.toISOString()
      };
    })
    .sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
});

ipcMain.handle('cv:delete', (_, fileName) => {
  const fp = path.join(cvDir, fileName);
  if (fs.existsSync(fp)) fs.unlinkSync(fp);
  return true;
});

ipcMain.handle('cv:open', (_, fileName) => {
  const fp = path.join(cvDir, fileName);
  if (fs.existsSync(fp)) shell.openPath(fp);
});
