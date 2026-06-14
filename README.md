# Surround — landing page

Marketing site for **Surround**, multi-device synchronized audio. Static
Next.js app (`output: "export"`), deployable to any static host.

The download buttons link to the desktop host installers published as GitHub
Release assets at
`github.com/kerembay9/surround/releases/latest/download/` — version-less
artifact names so the links stay valid across releases:

- `Surround-mac-arm64.dmg` — macOS (Apple Silicon)
- `Surround-mac-x64.dmg` — macOS (Intel)
- `Surround-windows-x64.exe` — Windows

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build static site

```bash
npm run build    # emits ./out
```

Deploy `out/` to GitHub Pages, Netlify, Vercel, etc. For GitHub Pages under a
project path, set `basePath`/`assetPrefix` in `next.config.ts`.
