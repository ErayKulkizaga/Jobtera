# Jobtera

Çevrimdışı çalışan, minimal tasarımlı **iş başvurusu takip uygulaması**.  
Electron tabanlıdır — kurulum gerektirmeden taşınabilir `.exe` olarak kullanılabilir.

---

## Özellikler

- **Başvuru Yönetimi** — Şirket, pozisyon, konum, tarih, URL ve notlarla eksiksiz takip
- **Durum Takibi** — Başvuruldu / İncelemede / Mülakat / Teklif / Reddedildi / Vazgeçildi
- **Anlık Durum Değiştirme** — Durum rozetine tıkla, açılan menüden seç
- **Filtreleme & Arama** — Duruma göre filtrele, şirket/pozisyon/not içinde ara
- **İstatistik Kartları** — Her durumdan kaç başvuru olduğunu anlık gör
- **Sıralama** — En yeni / En eski / Şirket A-Z / Duruma göre
- **CSV Dışa Aktarma** — Tüm verileri Excel uyumlu CSV olarak al
- **Not Genişletme** — Satıra tıklayarak notları görüntüle/gizle
- **Klavye Kısayolları** — `Ctrl+N` yeni başvuru, `Ctrl+F` arama, `Esc` kapat
- **Çevrimdışı** — İnternet bağlantısı gerekmez, veriler bilgisayarında saklanır

---

## Kurulum & Çalıştırma

### Geliştirme ortamında çalıştırmak

```bash
npm install
npm start
```

### .exe Oluşturma (Windows)

```bash
# Taşınabilir exe (kurulum gerektirmez)
npm run build:portable

# Kurulum sihirbazlı exe
npm run build:installer

# Her ikisi birden
npm run build
```

Çıktı dosyaları `dist/` klasöründe oluşur.

---

## Veri Depolama

Uygulama verileri bilgisayarındaki kullanıcı dizinine JSON formatında kaydedilir:

```
Windows: %APPDATA%\jobtera\jobtera-applications.json
```

Verilerini yedeklemek veya taşımak istersen bu dosyayı kopyalaman yeterli.

---

## Gereksinimler

- [Node.js](https://nodejs.org) (v18+)
- npm (Node.js ile birlikte gelir)

---

## Teknolojiler

- [Electron](https://www.electronjs.org/) — Masaüstü uygulama çatısı
- [electron-builder](https://www.electron.build/) — Paketleme & dağıtım
- Vanilla HTML / CSS / JavaScript — Bağımlılıksız, saf web teknolojileri

---

## Ekran Görüntüsü

> Uygulamayı başlatıp ekran görüntüsü ekleyebilirsin.

---

## Lisans

MIT
