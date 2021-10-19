import React from "react";
import styles from "styles/modules/TopImage.module.scss";
import Image from "next/image";
import topImageSp from "images/top_image_sp.svg";
import naminamiSp from "images/naminami-shiro_sp.svg";

const TopImage = () => {
  return (
    <div className={styles.topImageBox}>
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
