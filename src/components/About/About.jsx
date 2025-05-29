import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/assets/about/manwithlaprm.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/assets/about/uiIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/favicon-70x70.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>App Developer</h3>
              <p>
              Experienced in building fast, optimized mobile apps and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/artificial-intelligence.ico" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3> ML Engineer</h3>
              <p>
              Built and optimized ML models for accuracy.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};