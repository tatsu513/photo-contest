import styles from "styles/modules/Yushusakuhin.module.scss";
import Image from "next/image";
import Ribon from "images/saiyushu_ribon_sp.svg";
import sectionTitle from "images/section_title02_sp.svg";
import calenderImage from "images/saiyushu_image_sp.png";
import naminamiSp from "images/naminami-shiro_sp.svg";

const Yushusakuhin = () => {
  return (
    <div className={styles.yushusakuhinBox}>
      <div className={styles.titleBox}>
        <div className={styles.ribonImage}>
          <Image src={Ribon} alt={"優秀作品は・・・"} />
        </div>
        <Image src={sectionTitle} alt={"カレンダーとして販売！"} />
      </div>
      <section>
        <p className={styles.text}>
          審査の結果、優秀作品に選ばれた投稿作品は、2022年4月始まりのカレンダーとしてまとめて、流山市内で販売します。
          <br />
          また、流山市「杜のアトリエ黎明」で、優秀作品のリアル展示会も予定しています。
        </p>
        <div className={styles.calenderImageBox}>
          <Image src={calenderImage} alt={"カレンダー"} />
        </div>
        <p className={styles.note}>※画像はイメージです</p>
      </section>
      <div className="namiBox">
        <Image src={naminamiSp} alt="" />
      </div>
    </div>
  );
};

export default Yushusakuhin;
