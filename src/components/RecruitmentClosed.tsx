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
                <Link href="https://nagareyama-td.com/">
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
