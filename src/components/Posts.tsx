import styles from "styles/modules/Posts.module.scss";
import Image from "next/image";
import sectionTitle from "images/section_title03_sp.svg";
import sectionTitleMd from "images/section_title03_md.svg";
import sectionTitleLg from "images/section_title03_lg.svg";
import anotherIcon from "images/anotherIcon.svg";
import PrimaryButton from "./buttons/PrimaryButton";
import { useContext, useEffect, useState } from "react";
import { ContextData } from "pages/_app";
import Link from "next/link";

const Posts: React.VFC = () => {
  const ctx = useContext(ContextData);
  const isMd = ctx.windowWidth > 600 && ctx.windowWidth <= 1024;
  const isLg = ctx.windowWidth > 1024;

  const titleImage = isMd
    ? sectionTitleMd
    : isLg
    ? sectionTitleLg
    : sectionTitle;

  const [showNum, setShowNum] = useState(6);
  const addShowNum = () => setShowNum((prevState) => prevState + 6);

  useEffect(() => {
    (function (d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/cdn/ht.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "EmbedSocialHashtagScript");
  }, []);

  return (
    <div className={styles.postsBox}>
      <section className={styles.titleBox}>
        <Image src={titleImage} alt={"皆さまの投稿作品"} />
      </section>
      <section className={styles.postSection}>
        <p className={styles.text}>
          Instagramに投稿された作品から、ピックアップしてご紹介！
        </p>
        <Link
          href={
            "https://www.instagram.com/explore/tags/%E6%B5%81%E5%B1%B1%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC/?hl=ja"
          }
          passHref
        >
          <a target="_blank">
            <PrimaryButton text={"もっと見る"} />
          </a>
        </Link>
      </section>
      <div className="namiBox midori" />
    </div>
  );
};

export default Posts;
