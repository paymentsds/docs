import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Documentation</>,
    imageUrl: "img/undraw_documentation.svg",
    description: (
      <>Access Developer Documentation and start transacting online. </>
    ),
    link: { text: "Documentation" },
  },
  {
    title: <>SDKs</>,
    imageUrl: "img/undraw_sdk.svg",
    description: (
      <>
        Get started quickly. Use our SDKs JavaScript, PHP, RUBY, PYTHON and
        more.
      </>
    ),
    link: { url: "https://github.com/paymentsds", text: "Get SDKs" },
  },
];

function Feature({
  imageUrl,
  title,
  description,
  link: { url = null, text = "" },
}) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div className="text--center">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <Link to={url ?? useBaseUrl("/docs")}>{text}</Link>
        </p>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const docLink = useBaseUrl("docs/");
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">
            {siteConfig.tagline} <span>{siteConfig.customFields.span}</span>
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={docLink}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className={styles.row}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
