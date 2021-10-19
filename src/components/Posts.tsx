import { ContextData } from "pages/_app";
import { useContext } from "react";
import styles from "styles/modules/Posts.module.scss";
import Image from "next/image";
import sectionTitle from "images/section_title03_sp.svg";
import anotherIcon from "images/anotherIcon.svg";
import PrimaryButton from "./buttons/PrimaryButton";
import naminamiSp from "images/naminami-midori_sp.svg";

const Posts = () => {
  const ctx = useContext(ContextData);
  return (
    <div
      className={styles.postsBox}
      style={{ paddingTop: ctx.circleWidth / 2 + 55 }}
    >
      <section className={styles.titleBox}>
        <Image src={sectionTitle} alt={"皆さまの投稿作品"} />
      </section>
      <section>
        <p className={styles.text}>
          Instagramに投稿された作品から、ピックアップしてご紹介！
        </p>
        <div className={styles.posts}>
          <ul className={styles.postBox}>
            {[...Array(4)].map((_, i) => (
              <li key={i} className={styles.post}>
                <div className={styles.anotherIcon}>
                  <Image
                    src={anotherIcon}
                    alt="別タブでインスタグラムを開く"
                  />
                </div>
                <div className={styles.postImageBox}>
                  <Image
                    src={
                      "https://lazesoftware.com/tool/dummyimg/output?date=20211018&id=47070197f4cfaa1a9979f19f686dea41dc56a7b0&type=jpeg"
                    }
                    alt="サンプル"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.username}>akemi_kokubo</div>
                <p className={styles.postText}>おおおおおおおお</p>
              </li>
            ))}
          </ul>
        </div>
        <PrimaryButton text={"もっと見る"} />
      </section>
      <div className="namiBox">
        <Image src={naminamiSp} alt="" />
      </div>
    </div>
  );
};

export default Posts;
