import React from "react";
import Layout from "@theme/Layout";
import styles from "./about.module.css";

const About = () => {
  return (
    <Layout title="About">
      <div className={styles.main}>
        <div className="contain">
          <h1 className="hero__title">About</h1>
        </div>
        <p>About page content here...</p>
      </div>
    </Layout>
  );
};

export default About;
