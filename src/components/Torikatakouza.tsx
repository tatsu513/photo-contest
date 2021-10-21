import styles from "styles/modules/Torikatakouza.module.scss";
import Image from "next/image";
import sectionTitle from "images/section_title04_sp.svg";

const Torikatakouza = () => {
  return (
    <div className={styles.torikatakouzaBox} id="torikata">
      <div className={styles.titleBox}>
        <Image src={sectionTitle} alt="スマホ写真撮り方講座" />
      </div>
      <section className={styles.torikataSection}>
        <p className={styles.text}>
          流山市在住の写真家で、本コンテストのアドバイザーでもある
          大塚まゆみさんが、誰でも簡単にマネできる、スマホ写真の撮り方のコツを伝授！
        </p>
        <div className={styles.youtubeContent}>
          <div className={styles.movie} />
          <div className={styles.title}>主役を決めよう！編</div>
        </div>
        <div className={styles.youtubeContent}>
          <div className={styles.movie} />
          <div className={styles.title}>明るさを調整しよう！編</div>
        </div>
      </section>
      <div className="namiBox midori" />
    </div>
  );
};

export default Torikatakouza;
