import styles from "styles/modules/Footer.module.scss";
import Image from "next/image";
import FooterImage from "images/footer_image_sp.svg";
import logo from "images/logo_sp.png";

const Footer = () => {
  return (
    <div className={styles.footerBox}>
      <Image src={FooterImage} alt="フッター" />
      <div className={styles.footerContent}>
        <h4 className={styles.company}>
          主催　流山ツーリズムデザイン
        </h4>
        <div className={styles.logoBox}>
          <Image src={logo} alt="流山ツーリズムデザイン" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
