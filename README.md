# Spell Log (installable web app)

A bowling workload log for cricketers. Works offline once installed. Your logs are stored on your own phone.

## Files
- `index.html` the whole app
- `manifest.webmanifest` name, colors and icons (this is what makes it installable)
- `sw.js` lets it open offline
- `icon-192.png`, `icon-512.png` the app icon

## 1. Put it online (free, pick one)

**Netlify Drop (easiest, needs a computer)**
1. Unzip this folder.
2. Go to app.netlify.com/drop and sign up for free.
3. Drag the unzipped folder onto the page. You get a link like `random-name.netlify.app`.

**GitHub Pages**
1. Create a free GitHub account and a new public repository named `spell-log`.
2. Upload all the files (Add file, then Upload files).
3. Settings, then Pages, then set Branch to `main` and Save.
4. After a minute your app is at `yourname.github.io/spell-log`.

It must be served over https (both options above do this). Opening `index.html` directly from a folder will not install.

## 2. Install it on your phone
- **Android (Chrome):** open the link, tap the three-dot menu, then **Install app** (or **Add to Home screen**).
- **iPhone (Safari):** open the link, tap Share, then **Add to Home Screen**.

## 3. Optional: make a real Android APK
Go to pwabuilder.com, paste your link, and choose Android. It gives you an installable APK you can sideload. Publishing on the Play Store is a separate step you can do later.

## Updating the app
After you change any file, edit `sw.js` and change `spell-log-v1` to `spell-log-v2` (and so on), then upload again. Phones will pick up the new version the next time they open it.

## Weekly recap
The Recap tab copies a ready-made prompt. Paste it into a chat with Claude to get your recap. An in-app recap needs a small server to hold an API key, which is a later step.

## Your data
Logs live in this browser's storage on your phone. Clearing site data or uninstalling the app erases them, and they do not sync between devices.
