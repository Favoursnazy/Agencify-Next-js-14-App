import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "All you need to know about agancify",
};

function AboutPage() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agencify</h2>
          <h1 className={styles.title}>
            We create digital ideas that are bigger, bolder, braver and better
          </h1>
          <p className={styles.desc}>
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precission. Our special
            Team best consulting and finance solution provider. wide range of
            web and sofware development services.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Year of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/about.png"
            alt="about agencify"
            fill
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
