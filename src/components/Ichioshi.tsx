import styles from "styles/modules/Ichioshi.module.scss";
import Image from "next/image";
import sectionTitleSp from "images/section_title01_sp.svg";
import sectionTitleMd from "images/section_title01_md.svg";
import sectionTitleLg from "images/section_title01_lg.svg";
import shotImage from "images/to_shot_image_sp.png";
import PrimaryButton from "./buttons/PrimaryButton";
import { ContextData } from "pages/_app";
import { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  goApply: () => void;
}

const Ichioshi: React.VFC<Props> = ({ goApply }) => {
  const ctx = useContext(ContextData);
  const isMd = ctx.windowWidth > 600 && ctx.windowWidth <= 1024;
  const isLg = ctx.windowWidth > 1024;

  const titleImage = isMd
    ? sectionTitleMd
    : isLg
    ? sectionTitleLg
    : sectionTitleSp;
  return (
    <div className={styles.ichioshiBox}>
      <h1 className={styles.title}>
        <Image src={titleImage} alt="流山の風景を投稿してください" />
      </h1>
      <section>
        <div className={styles.contents}>
          <p className={styles.text}>
            歴史香る建造物・整備された新しい街並み・豊かな自然…流山市はコンパクトな地域ながら、多面的で魅力的な景色がたくさんあります。
            <br />
            ぜひ、あなたイチオシの流山の風景をスマホで撮影し、Instagramで「#流山カレンダー」を付けて紹介してください！（以前撮影した写真でもOKです。）
            たくさんのご応募お待ちしています。
          </p>
          <div className={styles.imageIlustBox}>
            <Image src={shotImage} alt="風景を撮影" />
          </div>
        </div>
        <PrimaryButton text={"応募方法はこちら"} onClick={goApply} />
      </section>
      <div className="namiBox midori" />
    </div>
  );
};

export default Ichioshi;
