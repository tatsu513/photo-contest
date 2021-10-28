import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "styles/modules/TopImage.module.scss";
import Image from "next/image";
import topImageSp from "images/top_image_sp.svg";
import topImageMd from "images/top_image_md.svg";
import topImageLg from "images/top_image_lg.svg";
import bgImage01 from "images/top_image01.jpg";
import bgImage02 from "images/top_image02.jpg";
import bgImage03 from "images/top_image03.jpg";
import bgImage04 from "images/top_image04.jpg";
import { ContextData } from "pages/_app";

const TopImage = () => {
  const ctx = useContext(ContextData);
  const isMd = ctx.windowWidth > 600 && ctx.windowWidth <= 1024;
  const isLg = ctx.windowWidth > 1025;

  const [currentImage, setCurrentImage] = useState(1);
  const bgClassName = (num: number): boolean => {
    return num === currentImage;
  };

  const titleImage = isMd
    ? topImageMd
    : isLg
    ? topImageLg
    : topImageSp;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage >= 4) {
        setCurrentImage(1);
      } else {
        setCurrentImage(() => currentImage + 1);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [currentImage]);
  return (
    <div className={`${styles.topImageBox}`}>
      <ul className={styles.bgItemBox}>
        <li
          className={`${styles.bgItem} ${
            bgClassName(1) && styles.isActive
          }`}
        >
          <Image src={bgImage01} alt="背景01" />
        </li>
        <li
          className={`${styles.bgItem} ${
            bgClassName(2) && styles.isActive
          }`}
        >
          <Image src={bgImage02} alt="背景02" />
        </li>
        <li
          className={`${styles.bgItem} ${
            bgClassName(3) && styles.isActive
          }`}
        >
          <Image src={bgImage03} alt="背景03" />
        </li>
        <li
          className={`${styles.bgItem} ${
            bgClassName(4) && styles.isActive
          }`}
        >
          <Image src={bgImage04} alt="背景04" />
        </li>
      </ul>
      <div className={styles.image}>
        <Image
          src={titleImage}
          alt="流山カレンダーフォトコンテスト"
        />
      </div>
      <div className={styles.photographer}>撮影：大塚まゆみ</div>
      <div className="namiBox shiro" />
    </div>
  );
};

export default TopImage;
