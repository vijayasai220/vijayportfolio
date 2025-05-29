import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:vijaysai220.chitturi@gmail.com">vijaysai220.chitturi@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="/assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/vijay-sai-chitturi-24097a261/">linkedin.com/Vijay</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/vijayasai220">github.com/Vijay</a>
        </li>
      </ul>
    </footer>
  );
};