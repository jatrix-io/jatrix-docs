import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Jatrix — SaaS Governance Engine for identity, multi-tenancy, and authorization"
    >
      <main className={clsx(styles.hero, "hero hero--primary")}>
        <img
          src="/img/dream.png"
          alt=""
          className={styles.dream}
          aria-hidden
        />
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Get Started
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/docs/api"
            >
              API Reference
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
