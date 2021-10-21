import styles from "styles/modules/Posts.module.scss";
import Image from "next/image";
import sectionTitle from "images/section_title03_sp.svg";
import anotherIcon from "images/anotherIcon.svg";
import PrimaryButton from "./buttons/PrimaryButton";
import { useState } from "react";

const Posts = () => {
  const [showNum, setShowNum] = useState(6);
  const addShowNum = () => setShowNum((prevState) => prevState + 6);

  const dammys = [
    {
      caption:
        "１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211018&id=47070197f4cfaa1a9979f19f686dea41dc56a7b0&type=jpeg",
    },
    {
      caption:
        "１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211018&id=47070197f4cfaa1a9979f19f686dea41dc56a7b0&type=jpeg",
    },
    {
      caption:
        "１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211018&id=47070197f4cfaa1a9979f19f686dea41dc56a7b0&type=jpeg",
    },
    {
      caption:
        "１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211018&id=47070197f4cfaa1a9979f19f686dea41dc56a7b0&type=jpeg",
    },
    {
      caption:
        "１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211018&id=47070197f4cfaa1a9979f19f686dea41dc56a7b0&type=jpeg",
    },
    {
      caption:
        "１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211018&id=47070197f4cfaa1a9979f19f686dea41dc56a7b0&type=jpeg",
    },
    {
      caption:
        "１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211018&id=47070197f4cfaa1a9979f19f686dea41dc56a7b0&type=jpeg",
    },
    {
      caption:
        "１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211018&id=47070197f4cfaa1a9979f19f686dea41dc56a7b0&type=jpeg",
    },
    {
      caption:
        "１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211018&id=47070197f4cfaa1a9979f19f686dea41dc56a7b0&type=jpeg",
    },
    {
      caption:
        "１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211018&id=47070197f4cfaa1a9979f19f686dea41dc56a7b0&type=jpeg",
    },
  ];

  const customData = dammys
    .map((dammy, i) => (i < showNum ? dammy : null))
    .filter((data) => data);

  return (
    <div className={styles.postsBox}>
      <section className={styles.titleBox}>
        <Image src={sectionTitle} alt={"皆さまの投稿作品"} />
      </section>
      <section className={styles.postSection}>
        <p className={styles.text}>
          Instagramに投稿された作品から、ピックアップしてご紹介！
        </p>
        <div className={styles.posts}>
          <ul className={styles.postBox}>
            {customData.map((dammy, i) => (
              <li key={i} className={styles.post}>
                <div className={styles.anotherIcon}>
                  <Image
                    src={anotherIcon}
                    alt="別タブでインスタグラムを開く"
                  />
                </div>
                <div className={styles.postImageBox}>
                  <Image
                    src={dammy.url}
                    alt="サンプル"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className={styles.postText}>{dammy.caption}</p>
              </li>
            ))}
          </ul>
        </div>
        <PrimaryButton text={"もっと見る"} onClick={addShowNum} />
      </section>
      <div className="namiBox midori" />
    </div>
  );
};

export default Posts;
