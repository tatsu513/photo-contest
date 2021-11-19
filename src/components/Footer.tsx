import styles from "styles/modules/Footer.module.scss";
import Image from "next/image";
import logo from "images/logo_sp.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerBox}>
      <div className={styles.footerImage} />
      <div className={styles.footerContent}>
        <h4 className={styles.company}>
          主催　流山ツーリズムデザイン
        </h4>
        <div className={styles.logoBox}>
          <Link href="https://nagareyama-td.com/">
            <a className={styles.ListItemLink} target="_blank">
              <Image src={logo} alt="流山ツーリズムデザイン" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
