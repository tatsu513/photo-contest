import styles from "../styles/modules/recruitmentClosed.module.scss";
import Link from "next/link";

type Props = {
  isAll?: boolean;
};

const RecruitmentClosed: React.VFC<Props> = ({ isAll }) => {
  return (
    <section>
      {isAll ? (
        <div className={styles.contentBox}>
          <div className={styles.topBox}>
            <h1 className={styles.title}>募集は終了しました</h1>
            <p className={styles.text}>
              たくさんのご応募
              <br className={styles.smOnly} />
              ありがとうございました！
            </p>
          </div>
          <div className={styles.noteBox}>
            <ul className={styles.notes}>
              <li className={styles.note}>
                ※優秀作品発表は2022年1月中旬頃、
                <Link href="https://nagareyama-td.com/%e3%80%8c%ef%bc%83%e6%b5%81%e5%b1%b1%e3%82%ab%e3%83%ac%e3%83%b3%e3%83%80%e3%83%bc-%e5%86%99%e7%9c%9f%e3%82%b3%e3%83%b3%e3%83%86%e3%82%b9%e3%83%88%e3%80%8d%e5%85%a5%e8%b3%9e%e8%80%85%e7%99%ba%e8%a1%a8/">
                  <a target="_blank" className={styles.link}>
                    流山ツーリズムデザインのサイト
                  </a>
                </Link>
                で行います。
              </li>
              <li className={styles.note}>
                ※優秀作品の投稿者には、InstagramのDM機能からご連絡します。
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={`${styles.contentBox} ${styles.info}`}>
          <div className={`${styles.topBox} ${styles.info}`}>
            <h1 className={styles.title}>募集は終了しました</h1>
            <p className={styles.text}>
              たくさんのご応募
              <br className={styles.smOnly} />
              ありがとうございました！
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecruitmentClosed;
