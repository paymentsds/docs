import React from "react";
import Layout from "@theme/Layout";
import styles from "./forum.module.css";

const Forum = () => {
  return (
    <Layout title="Forum">
      <div className={styles.main}>
        <div className="contain">
          <h1 className="hero__title">Forums</h1>
        </div>
        <p>Forum page content here...</p>
      </div>
    </Layout>
  );
};

export default Forum;
