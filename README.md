# Manassas Dental & Cosmetics — Google Ads landing pages

Static landing pages for **dentistofmanassas.com**, hosted on Hostinger.

## Pages

| URL | Campaign |
| --- | --- |
| `/` | General dentist |
| `/dentist-manassas` | General dentist |
| `/insurance-dentist` | Patients with insurance |
| `/no-insurance-dentist` | Patients without insurance |
| `/medicaid-dentist` | Medicaid / Medicare |

## How deployment works

1. Push to `main`.
2. GitHub Actions (`.github/workflows/deploy.yml`) runs `npm run build`, which produces a static export in `dist/client/`.
3. The export is force-pushed to the `hostinger` branch.
4. Hostinger's Git integration (hPanel → Websites → Manage → Advanced → Git) pulls the `hostinger` branch into `public_html`. Enable auto-deploy there with the GitHub webhook so every push goes live.

`public/.htaccess` handles clean URLs (`/medicaid-dentist` → `medicaid-dentist.html`), HTTPS redirect, and caching.

## Local development

```bash
npm install
npm run dev
```

To preview the production static export:

```bash
npm run build
python3 -m http.server 8765 --directory dist/client
```
