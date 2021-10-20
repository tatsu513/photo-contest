import Link from "next/link";
import styles from "styles/modules/Posts.module.scss";
import Image from "next/image";
import sectionTitle from "images/section_title03_sp.svg";
import anotherIcon from "images/anotherIcon.svg";
import PrimaryButton from "./buttons/PrimaryButton";
import naminamiSp from "images/naminami-midori_sp.svg";

interface Props {
  postData: any;
}

const Posts: React.VFC<Props> = ({ postData }) => {
  const posts = postData.data;
  return (
    <div className={styles.postsBox}>
      <section className={styles.titleBox}>
        <Image src={sectionTitle} alt={"皆さまの投稿作品"} />
      </section>
      <section>
        <p className={styles.text}>
          Instagramに投稿された作品から、ピックアップしてご紹介！
        </p>
        <div className={styles.posts}>
          <ul className={styles.postBox}>
            {posts.map((post, i) => (
              <li key={i} className={styles.post}>
                <Link href={post.permalink}>
                  <div className={styles.anotherIcon}>
                    <Image
                      src={anotherIcon}
                      alt="別タブでインスタグラムを開く"
                    />
                  </div>
                  <a className={styles.ListItemLink} target="_blank">
                    <div className={styles.postImageBox}>
                      <Image
                        src={
                          post.media_url
                            ? post.media_url
                            : post.children.data[1].media_url
                        }
                        alt="サンプル"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className={styles.username}>
                      akemi_kokubo
                    </div>
                    <p className={styles.postText}>{post.caption}</p>
                  </a>
                </Link>
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
