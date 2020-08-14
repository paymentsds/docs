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
    link: <Link to="https://developers.paymentsds.org/docs/"> Get SDKs </Link>,
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
    link: <Link to="https://github.com/paymentsds"> Get SDKs </Link>,
  },
];

function Feature({ imageUrl, title, description, link }) {
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
        <p>{link}</p>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
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
              to={useBaseUrl("docs/")}
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
