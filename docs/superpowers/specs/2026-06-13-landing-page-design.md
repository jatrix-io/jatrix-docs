# Landing Page Redesign — jatrix.cloud

**Date:** 2026-06-13  
**Status:** Approved  
**Scope:** `jatrix-docs` repo — `src/pages/index.tsx` + `src/css/custom.css`

---

## 1. Goal

Replace the current minimal hero (Docusaurus default) with a full marketing landing page that converts technical founders and B2B SaaS developers into Jatrix users. The docs site (`jatrix.cloud`) doubles as the marketing site.

## 2. Design Direction

**Style:** Clean SaaS (Clerk / WorkOS / Linear aesthetic)  
**Palette:** Existing navy (`#1e3a5f`) — no palette changes  
**Typography:** System font stack, tight letter-spacing on headings  
**Tone:** English only, direct, developer-first copy  

## 3. Sections (top to bottom)

### 3.1 Nav
- Logo (logo.png — owl icon) + "Jatrix" wordmark
- Links: Docs · API Reference · Pricing
- Right: Sign in (ghost) + **Get started free** (navy CTA button)
- Sticky, frosted glass background on scroll (`backdrop-filter: blur`)

### 3.2 Hero
- **Left column:**
  - Eyebrow badge: `API v1 · Now available` with green live dot
  - H1: *"Stop rebuilding auth for every product"* — accent color on "every product"
  - Subtitle: value prop — multi-tenancy, RBAC, audit trails, days not months
  - CTA primary: **Get started free** | CTA ghost: **Read the docs →**
  - Note: *Free sandbox · No credit card · Production from $24.99/mo per org*
- **Right column:**
  - Founder photo (`static/img/dream.png`) in **oval frame** with soft gradient background and floating badge "Built by the founder"

### 3.3 Logos band
- Thin divider, then: "Powering governance in" + L'Atelier chip + TaskLever chip + "+ your product here" (faded)

### 3.4 Features (4-column grid)
Each cell: colored icon (SVG, no emoji), category tag, title, 2-line description.

| # | Tag | Title | Icon color |
|---|---|---|---|
| 1 | Identity | Global Identity Management | Blue |
| 2 | Multi-tenancy | Hard Tenant Isolation | Green |
| 3 | Authorization | Product-scoped RBAC | Purple |
| 4 | Compliance | Synchronous Audit Trail | Orange |

Grid: 1px `#f1f5f9` borders between cells, white background, subtle hover state.

### 3.5 Code snippet (2-column split)
- Left: label + h2 "Authorization in one API call" + 3 bullets
- Right: dark code panel (`#0a1628`) with macOS traffic-light dots, showing 3 API calls: create tenant → assign role → check permission

### 3.6 How it works (3 steps)
- Light gray background (`#f8fafc`)
- Step 01: Create your org & products
- Step 02: Onboard tenants & users  
- Step 03: Consume the JWT
- Left-aligned text per step, short decorative line above step number

### 3.7 Pricing (2-column)

**Sandbox — $0**
- Up to 2 tenants per org
- Up to 5 users per tenant
- Identity & JWT issuance
- Role & permission management
- Product-scoped RBAC
- Organization API keys
- Audit trail
- ❌ Biometric verification
- ❌ Entitlement control
- ❌ Priority support

**Production — $24.99/mo per org**
- Unlimited tenants per org
- Unlimited users per tenant
- Identity & JWT issuance
- Role & permission management
- Product-scoped RBAC
- Organization API keys
- Audit trail
- ✅ Biometric verification
- ✅ Entitlement control
- ✅ Priority support & SLA

Featured card: double border (`#1e3a5f`), "Most popular" badge.

### 3.8 CTA Banner
- Dark navy background (`#0a1628`)
- H2: "Ready to govern your SaaS?"
- Subtext + white button "Start building today →"

### 3.9 Footer
- Logo + "© 2026 Jatrix · ProCode Ind"
- Links: Docs · API Reference · Privacy · Terms

---

## 4. Implementation Approach

**Option chosen:** Custom `src/pages/index.tsx` + inline styles / CSS module  
Docusaurus allows full custom React pages — no theme override needed.

- Replace `src/pages/index.tsx` entirely with a multi-section React component
- Move all section styles into `src/pages/index.module.css`
- Keep `src/css/custom.css` for global/doc styles only
- Images served from `static/img/` (already present: `logo.png`, `dream.png`)
- No new dependencies required

---

## 5. Files to change

| File | Change |
|---|---|
| `src/pages/index.tsx` | Full rewrite — multi-section landing page |
| `src/pages/index.module.css` | Full rewrite — all landing styles |
| `src/css/custom.css` | No change |
| `static/img/` | No change — logo.png and dream.png already exist |
| `docusaurus.config.ts` | No change |

---

## 6. Out of scope

- Sign-up flow / auth (no backend)
- Blog section
- i18n / Spanish version
- Dark mode override for landing (docs dark mode untouched)
