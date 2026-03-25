const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('trackjob', {
  // Data
  getAll:           ()              => ipcRenderer.invoke('data:getAll'),
  save:             (app)           => ipcRenderer.invoke('data:save', app),
  delete:           (id)            => ipcRenderer.invoke('data:delete', id),
  deleteMany:       (ids)           => ipcRenderer.invoke('data:deleteMany', ids),
  updateStatus:     (id, status)    => ipcRenderer.invoke('data:updateStatus', { id, status }),
  updateManyStatus: (ids, status)   => ipcRenderer.invoke('data:updateManyStatus', { ids, status }),
  exportCsv:        ()              => ipcRenderer.invoke('data:exportCsv'),
  importBatch:      (apps)          => ipcRenderer.invoke('data:importBatch', apps),

  // Dialog
  openFile:         (opts)          => ipcRenderer.invoke('dialog:openFile', opts),

  // Settings
  getSettings:      ()              => ipcRenderer.invoke('settings:get'),
  saveSettings:     (s)             => ipcRenderer.invoke('settings:save', s),

  // Window
  minimize:         ()              => ipcRenderer.invoke('window:minimize'),
  maximize:         ()              => ipcRenderer.invoke('window:maximize'),
  close:            ()              => ipcRenderer.invoke('window:close'),
  isMaximized:      ()              => ipcRenderer.invoke('window:isMaximized'),

  // Shell
  openUrl:          (url)           => ipcRenderer.invoke('shell:openUrl', url),
  showDataInFolder: ()              => ipcRenderer.invoke('shell:showDataInFolder'),
  openBackupFolder: ()              => ipcRenderer.invoke('shell:openBackupFolder'),

  // Splash
  splashReady:      ()              => ipcRenderer.invoke('splash:ready'),

  // CV Management
  pickCv:           ()              => ipcRenderer.invoke('cv:pick'),
  saveCv:           (data)          => ipcRenderer.invoke('cv:save', data),
  listCvs:          ()              => ipcRenderer.invoke('cv:list'),
  deleteCv:         (fileName)      => ipcRenderer.invoke('cv:delete', fileName),
  openCv:           (fileName)      => ipcRenderer.invoke('cv:open', fileName),
});
