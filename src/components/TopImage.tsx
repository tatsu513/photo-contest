import React, { useCallback, useEffect, useState } from "react";
import styles from "styles/modules/TopImage.module.scss";
import Image from "next/image";
import topImageSp from "images/top_image_sp.svg";
import naminamiSp from "images/naminami-shiro_sp.svg";

const TopImage = () => {
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
          src={topImageSp}
          alt="流山カレンダーフォトコンテスト"
        />
      </div>
      <div className={styles.photographer}>撮影：大塚まゆみ</div>
      <div className="namiBox">
        <Image src={naminamiSp} alt="" />
      </div>
    </div>
  );
};

export default TopImage;
