import styles from "styles/modules/Yushusakuhin.module.scss";
import { ContextData } from "pages/_app";
import { useContext } from "react";
import Image from "next/image";
import Ribon from "images/saiyushu_ribon_sp.svg";
import sectionTitle from "images/section_title02_sp.svg";
import calenderImage from "images/saiyushu_image_sp.png";
import Circles from "@/components/commons/Circles";

const Yushusakuhin = () => {
  const ctx = useContext(ContextData);

  return (
    <div
      className={styles.yushusakuhinBox}
      style={{ paddingTop: ctx.circleWidth / 2 + 55 }}
    >
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
        <Image src={calenderImage} alt={"カレンダー"} />
        <p className={styles.note}>※画像はイメージです</p>
      </section>
      <div
        className={styles.circleWrapper}
        style={{ bottom: (ctx.circleWidth / 2) * -1 }}
      >
        <Circles color={"#e9f4e9"} />
      </div>
    </div>
  );
};

export default Yushusakuhin;
