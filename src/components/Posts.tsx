import styles from "styles/modules/Posts.module.scss";
import Image from "next/image";
import sectionTitle from "images/section_title03_sp.svg";
import sectionTitleMd from "images/section_title03_md.svg";
import sectionTitleLg from "images/section_title03_lg.svg";
import anotherIcon from "images/anotherIcon.svg";
import PrimaryButton from "./buttons/PrimaryButton";
import { useContext, useState } from "react";
import { ContextData } from "pages/_app";
import Link from "next/link";

interface Props {
  postData: any;
}

const Posts: React.VFC<Props> = ({ postData }) => {
  const posts = postData.data;
  console.log(posts);
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

  const dammys = [
    {
      caption: "ここに取得した投稿のキャンプションが入ります。",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211103&id=d2582a46dc8ace34b98c0c929938cf75c649c27e&type=png",
    },
    {
      caption: "ここに取得した投稿のキャンプションが入ります。",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211103&id=d2582a46dc8ace34b98c0c929938cf75c649c27e&type=png",
    },
    {
      caption: "ここに取得した投稿のキャンプションが入ります。",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211103&id=d2582a46dc8ace34b98c0c929938cf75c649c27e&type=png",
    },
    {
      caption: "ここに取得した投稿のキャンプションが入ります。",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211103&id=d2582a46dc8ace34b98c0c929938cf75c649c27e&type=png",
    },
    {
      caption: "ここに取得した投稿のキャンプションが入ります。",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211103&id=d2582a46dc8ace34b98c0c929938cf75c649c27e&type=png",
    },
    {
      caption: "ここに取得した投稿のキャンプションが入ります。",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211103&id=d2582a46dc8ace34b98c0c929938cf75c649c27e&type=png",
    },
    {
      caption: "ここに取得した投稿のキャンプションが入ります。",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211103&id=d2582a46dc8ace34b98c0c929938cf75c649c27e&type=png",
    },
    {
      caption: "ここに取得した投稿のキャンプションが入ります。",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211103&id=d2582a46dc8ace34b98c0c929938cf75c649c27e&type=png",
    },
    {
      caption: "ここに取得した投稿のキャンプションが入ります。",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211103&id=d2582a46dc8ace34b98c0c929938cf75c649c27e&type=png",
    },
    {
      caption: "ここに取得した投稿のキャンプションが入ります。",
      url: "https://lazesoftware.com/tool/dummyimg/output?date=20211103&id=d2582a46dc8ace34b98c0c929938cf75c649c27e&type=png",
    },
  ];

  const customData = posts
    .map((dammy, i) => (i < showNum ? dammy : null))
    .filter((data) => data);

  return (
    <div className={styles.postsBox}>
      <section className={styles.titleBox}>
        <Image src={titleImage} alt={"皆さまの投稿作品"} />
      </section>
      <section className={styles.postSection}>
        <p className={styles.text}>
          Instagramに投稿された作品から、ピックアップしてご紹介！
        </p>
        <div className={styles.posts}>
          <ul
            className={`${styles.postBox} ${
              customData.length % 3 === 2 && styles.remainder
            }`}
          >
            {customData.map((post, i) => (
              <li key={i} className={styles.post}>
                <Link href={post.permalink}>
                  <a href={post.permalink} target="_blank">
                    <div className={styles.anotherIcon}>
                      <Image
                        src={anotherIcon}
                        alt="別タブでインスタグラムを開く"
                      />
                    </div>
                    <div className={styles.postImageBox}>
                      <Image
                        src={
                          post.media_url
                            ? post.media_url
                            : post.children.data[0].media_url
                        }
                        alt="サンプル"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <p className={styles.postText}>{post.caption}</p>
                  </a>
                </Link>
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
