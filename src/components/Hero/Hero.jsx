import React from "react";
import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vijayasai Chitturi</h1>
        <p className={styles.description}>
        I'm a Computer Science graduate interested in Android apps, web development, 
        and Machine learning.
        </p>
        <a href="mailto:vijaysai220.chitturi@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/assets/hero/HeroImg-modified.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};