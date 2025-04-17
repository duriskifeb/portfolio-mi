import styles from "../Hero/HeroStyles.module.css";
import heroImg from "../../assets/profile.png";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext"; // ini masih dipakai untuk ganti icon sosmed

function Label({ label }) {
  return (
    <div className={styles.label}>
      <p className={styles.labelText}>{label}</p>
    </div>
  );
}

function Hero() {
  const { theme } = useTheme(); // hanya butuh theme saja

  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
      </div>
      <div className={styles.info}>
        <Label label="Sofware Engginering TUS 23" />
        <h1 className={styles.subHeading} style={{color: theme === "dark" ? "#fff" : "#222"}}>Muhammad Rizky Febriyanto</h1>
        {/* <h2>Frontend Developer</h2>  */}

        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
