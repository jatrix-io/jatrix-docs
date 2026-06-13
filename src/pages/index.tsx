import Layout from "@theme/Layout";
import styles from "./index.module.css";

function CheckIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
      <polyline points="2,5 4,8 8,2" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
      <line x1="2" y1="2" x2="8" y2="8" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="2" x2="2" y2="8" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PlanItem({ included, children }: { included: boolean; children: React.ReactNode }) {
  return (
    <li className={`${styles.planItem} ${!included ? styles.planItemDisabled : ""}`}>
      <span className={included ? styles.piCheck : styles.piX}>
        {included ? <CheckIcon /> : <XIcon />}
      </span>
      {children}
    </li>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Jatrix — SaaS Governance Engine"
      description="The control plane that gives your B2B SaaS multi-tenancy, RBAC, and audit trails — shipped in days, not months."
    >
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className={styles.heroBg}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>
              <span className={styles.eyebrowDot} />
              API v1 · Now available
            </div>
            <h1 className={styles.heroH1}>
              Stop rebuilding auth<br />
              for <span className={styles.heroAccent}>every product</span>
            </h1>
            <p className={styles.heroDesc}>
              Jatrix is the governance control plane that gives your B2B SaaS
              multi-tenancy, role-based access, and audit trails — shipped in
              days, not months.
            </p>
            <div className={styles.heroActions}>
              <a href="/docs/intro" className={styles.btnPrimary}>Get started free</a>
              <a href="/docs/intro" className={styles.btnGhost}>Read the docs →</a>
            </div>
            <p className={styles.heroNote}>
              Free sandbox · No credit card ·{" "}
              <strong>Production from $24.99/mo per org</strong>
            </p>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.photoWrap}>
              <div className={styles.photoBg} />
              <div className={styles.photoOval}>
                <img src="/img/dream.png" alt="Jatrix founder" className={styles.photoImg} />
              </div>
              <div className={styles.photoBadge}>
                <span>🦉</span>
                <span className={styles.photoBadgeText}>Built by the founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Logos band ───────────────────────────────────── */}
      <div className={styles.logosBandOuter}>
        <div className={styles.logosBand}>
          <span className={styles.logosLabel}>Powering governance in</span>
          <span className={styles.logoChip}>
            <span className={styles.chipDot} style={{ background: "#1e3a5f" }} />
            L&apos;Atelier
          </span>
          <span className={styles.logoChip}>
            <span className={styles.chipDot} style={{ background: "#22c55e" }} />
            TaskLever
          </span>
          <span className={`${styles.logoChip} ${styles.logoChipFaded}`}>
            + your product here
          </span>
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────── */}
      <div className={styles.featuresOuter}>
        <div className={styles.features}>
          <div className={styles.featHeader}>
            <div className={styles.sectionEyebrow}>What you get</div>
            <h2>Everything your SaaS<br />needs to govern access</h2>
            <p>
              No more copy-pasting auth boilerplate. Jatrix centralizes identity,
              tenancy, and authorization so your team ships features — not
              infrastructure.
            </p>
          </div>
          <div className={styles.featGrid}>
            <div className={styles.featCell}>
              <div className={styles.featIconWrap} style={{ background: "#eff6ff" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
              <div className={styles.featTag}>Identity</div>
              <h3>Global Identity Management</h3>
              <p>RS256-signed JWTs with full org, tenant, and product context. One auth layer across all your products.</p>
            </div>
            <div className={styles.featCell}>
              <div className={styles.featIconWrap} style={{ background: "#f0fdf4" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="8" height="8" rx="1.5" />
                  <rect x="3" y="13" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" />
                </svg>
              </div>
              <div className={styles.featTag}>Multi-tenancy</div>
              <h3>Hard Tenant Isolation</h3>
              <p>Every query is scoped to <code>org + tenant</code>. Cross-tenant data leaks are structurally impossible, not just policy.</p>
            </div>
            <div className={styles.featCell}>
              <div className={styles.featIconWrap} style={{ background: "#faf5ff" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
              </div>
              <div className={styles.featTag}>Authorization</div>
              <h3>Product-scoped RBAC</h3>
              <p>Admin in CRM, read-only in WMS. Roles and permissions always scoped to product + tenant — never global, never ambiguous.</p>
            </div>
            <div className={styles.featCell}>
              <div className={styles.featIconWrap} style={{ background: "#fff7ed" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c2410c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 12h6M9 16h4" />
                </svg>
              </div>
              <div className={styles.featTag}>Compliance</div>
              <h3>Synchronous Audit Trail</h3>
              <p>Every mutation writes a log in the same database transaction. No async drift. Compliance-ready from day one.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Code split ───────────────────────────────────── */}
      <section className={styles.codeSplit}>
        <div className={styles.codeSplitInner}>
          <div className={styles.codeContent}>
            <div className={styles.codeEyebrow}>Simple by design</div>
            <h2>Authorization<br />in one API call</h2>
            <p>No scattered role checks. No bespoke middleware. Jatrix decides who can do what — your app just asks.</p>
            <div className={styles.codeBullet}><div className={styles.codeBulletDot} /><span>Create a tenant in one POST</span></div>
            <div className={styles.codeBullet}><div className={styles.codeBulletDot} /><span>Assign roles scoped to any product</span></div>
            <div className={styles.codeBullet}><div className={styles.codeBulletDot} /><span>Check permissions with a single GET</span></div>
          </div>
          <div className={styles.codePanel}>
            <div className={styles.codeTopbar}>
              <div className={styles.codeDotR} /><div className={styles.codeDotY} /><div className={styles.codeDotG} />
              <span className={styles.codeTab}>jatrix-example.sh</span>
            </div>
            <div className={styles.codeBody}>
              <div><span className={styles.cc}># Create a tenant</span></div>
              <div><span className={styles.cm}>POST</span> <span className={styles.cp}>/v1/tenants</span></div>
              <div><span className={styles.cn}>{"{ "}</span><span className={styles.ck}>"name"</span><span className={styles.cn}>: </span><span className={styles.cs}>"Acme Corp"</span><span className={styles.cn}>{" }"}</span></div>
              <div>&nbsp;</div>
              <div><span className={styles.cc}># Assign a role</span></div>
              <div><span className={styles.cm}>POST</span> <span className={styles.cp}>/v1/users/:id/roles</span></div>
              <div><span className={styles.cn}>{"{ "}</span><span className={styles.ck}>"role"</span><span className={styles.cn}>: </span><span className={styles.cs}>"admin"</span><span className={styles.cn}>, </span><span className={styles.ck}>"product_id"</span><span className={styles.cn}>: </span><span className={styles.cs}>"crm"</span><span className={styles.cn}>{" }"}</span></div>
              <div>&nbsp;</div>
              <div><span className={styles.cc}># Check permission</span></div>
              <div><span className={styles.cm}>GET</span> <span className={styles.cp}>/v1/permissions/check?key=orders:create</span></div>
              <div><span className={styles.cn}>{"→ { "}</span><span className={styles.ck}>"allowed"</span><span className={styles.cn}>: </span><span className={styles.cb}>true</span><span className={styles.cn}>{" }"}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────── */}
      <section className={styles.howSection}>
        <div className={styles.howInner}>
          <div className={styles.sectionEyebrow}>How it works</div>
          <h2>Integrate in three steps</h2>
          <p>Your team doesn&apos;t need to learn governance. They just call the API.</p>
          <div className={styles.steps}>
            <div>
              <div className={styles.stepLine} />
              <div className={styles.stepNum}>Step 01</div>
              <div className={styles.stepTitle}>Create your org &amp; products</div>
              <p className={styles.stepDesc}>Register your company, define your products (CRM, WMS…), and configure base roles and permissions.</p>
            </div>
            <div>
              <div className={styles.stepLine} />
              <div className={styles.stepNum}>Step 02</div>
              <div className={styles.stepTitle}>Onboard tenants &amp; users</div>
              <p className={styles.stepDesc}>Add clients as tenants, invite users, assign roles per product, and set entitlements — all via API.</p>
            </div>
            <div>
              <div className={styles.stepLine} />
              <div className={styles.stepNum}>Step 03</div>
              <div className={styles.stepTitle}>Consume the JWT</div>
              <p className={styles.stepDesc}>Jatrix issues tokens with full org, tenant, and product context. Your app verifies permissions with one call.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────── */}
      <div id="pricing" className={styles.pricingOuter}>
        <div className={styles.pricingInner}>
          <div className={styles.pricingHead}>
            <div className={styles.sectionEyebrow}>Pricing</div>
            <h2>Start free. Scale when ready.</h2>
            <p>No hidden fees. No per-seat surprises. Pay when you go to production.</p>
          </div>
          <div className={styles.plans}>
            {/* Sandbox */}
            <div className={styles.planCard}>
              <div className={styles.planTier}>Sandbox</div>
              <div className={styles.planAmount}>$0</div>
              <div className={styles.planTagline}>Free forever. Build and validate with no time limit.</div>
              <ul className={styles.planItems}>
                <PlanItem included>Up to 2 tenants per org</PlanItem>
                <PlanItem included>Up to 5 users per tenant</PlanItem>
                <PlanItem included>Identity &amp; JWT issuance</PlanItem>
                <PlanItem included>Role &amp; permission management</PlanItem>
                <PlanItem included>Product-scoped RBAC</PlanItem>
                <PlanItem included>Organization API keys</PlanItem>
                <PlanItem included>Audit trail</PlanItem>
                <PlanItem included={false}>Biometric verification</PlanItem>
                <PlanItem included={false}>Entitlement control</PlanItem>
                <PlanItem included={false}>Priority support</PlanItem>
              </ul>
              <a href="/docs/intro" className={styles.planBtnLight}>Get started free</a>
            </div>
            {/* Production */}
            <div className={`${styles.planCard} ${styles.planCardFeatured}`}>
              <div className={styles.planPopular}>Most popular</div>
              <div className={styles.planTier}>Production</div>
              <div className={styles.planAmount}>$24.99 <small>/ mo per org</small></div>
              <div className={styles.planTagline}>Unlimited multi-tenancy. One org, as many tenants as you need.</div>
              <ul className={styles.planItems}>
                <PlanItem included>Unlimited tenants per org</PlanItem>
                <PlanItem included>Unlimited users per tenant</PlanItem>
                <PlanItem included>Identity &amp; JWT issuance</PlanItem>
                <PlanItem included>Role &amp; permission management</PlanItem>
                <PlanItem included>Product-scoped RBAC</PlanItem>
                <PlanItem included>Organization API keys</PlanItem>
                <PlanItem included>Audit trail</PlanItem>
                <PlanItem included>Biometric verification</PlanItem>
                <PlanItem included>Entitlement control</PlanItem>
                <PlanItem included>Priority support &amp; SLA</PlanItem>
              </ul>
              <a href="/docs/intro" className={styles.planBtnDark}>Start production</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section className={styles.ctaBanner}>
        <h2>Ready to govern your SaaS?</h2>
        <p>Free sandbox. No credit card. Ship governance in days, not months.</p>
        <a href="/docs/intro" className={styles.btnWhite}>Start building today →</a>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <img src="/img/logo.png" alt="Jatrix" className={styles.footerLogo} />
          <span>© 2026 Jatrix · ProCode Ind</span>
        </div>
        <div className={styles.footerLinks}>
          <a href="/docs/intro">Docs</a>
          <a href="/docs/api">API Reference</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </Layout>
  );
}
