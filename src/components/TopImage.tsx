import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "styles/modules/TopImage.module.scss";
import Image from "next/image";
import topImageSp from "images/top_image_sp.svg";
import topImageMd from "images/top_image_md.svg";
import topImageLg from "images/top_image_lg.svg";
import { ContextData } from "pages/_app";

const TopImage = () => {
  const ctx = useContext(ContextData);
  const isMd = ctx.windowWidth > 600 && ctx.windowWidth <= 1024;
  const isLg = ctx.windowWidth > 1025;

  const [currentImage, setCurrentImage] = useState(1);
  const bgClassName = useCallback(() => {
    switch (currentImage) {
      case 1:
        return "bg1";
      case 2:
        return "bg2";
      case 3:
        return "bg3";
      case 4:
        return "bg4";
    }
  }, [currentImage]);

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
    <div className={`${styles.topImageBox} ${styles[bgClassName()]}`}>
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
