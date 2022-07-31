import { FunctionComponent } from "react";
import styles from './../styles/Home.module.css';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Nilupul
      </a>
    </footer>
  );
};

export default Footer;
