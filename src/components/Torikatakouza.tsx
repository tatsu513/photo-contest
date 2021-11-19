import styles from "styles/modules/Torikatakouza.module.scss";
import Image from "next/image";
import sectionTitle from "images/section_title04_sp.svg";
import sectionTitleMd from "images/section_title04_md.svg";
import sectionTitleLg from "images/section_title04_lg.svg";
import { ContextData } from "pages/_app";
import { useContext } from "react";

const Torikatakouza = () => {
  const ctx = useContext(ContextData);
  const isMd = ctx.windowWidth > 600 && ctx.windowWidth <= 1024;
  const isLg = ctx.windowWidth > 1024;

  const titleImage = isMd
    ? sectionTitleMd
    : isLg
    ? sectionTitleLg
    : sectionTitle;
  return (
    <div className={styles.torikatakouzaBox} id="torikata">
      <div className={styles.titleBox}>
        <Image src={titleImage} alt="スマホ写真撮り方講座" />
      </div>
      <section className={styles.torikataSection}>
        <p className={styles.text}>
          流山市在住の写真家で、本コンテストのアドバイザーでもある
          大塚まゆみさんが、誰でも簡単にマネできる、スマホ写真の撮り方のコツを伝授！
        </p>
        <div className={styles.youtubeContent}>
          <div className={styles.movie}>
            <div className={styles.youtube}>
              <iframe
                className={`${styles.iframe} relative left-1/2 -translate-x-1/2 h-60 2xs:h-80 xs:h-96 lg:h-100 w-full sm:w-2/3`}
                src="https://www.youtube-nocookie.com/embed/UeVUvaRg7yk"
                title="YouTube video player"
                frameBorder={"0"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className={styles.title}>準備編</div>
        </div>
        <div className={styles.youtubeContent}>
          <div className={styles.movie}>
            <div className={styles.youtube}>
              <iframe
                className={`${styles.iframe} relative left-1/2 -translate-x-1/2 h-60 2xs:h-80 xs:h-96 lg:h-100 w-full sm:w-2/3`}
                src="https://www.youtube-nocookie.com/embed/9I8IwaScGG4"
                title="YouTube video player"
                frameBorder={"0"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className={styles.title}>撮影編</div>
        </div>
      </section>
      <div className="namiBox midori" />
    </div>
  );
};

export default Torikatakouza;
