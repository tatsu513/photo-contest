import { ContextData } from "pages/_app";
import { useContext } from "react";
import styles from "styles/modules/Boshuyoukou.module.scss";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import Essentials from "./commons/Essentials";
import TextTitle from "./commons/TextTitle";
import Mayumiotsuka from "images/mayumiotsukaprofile_sp.png";
import Instagram from "images/Instagram.svg";

const Boshuyoukou = () => {
  const ctx = useContext(ContextData);
  return (
    <div
      className={styles.boshuyoukouBox}
      style={{ paddingTop: ctx.circleWidth / 2 + 55 }}
    >
      <TextTitle text={"募集要項"} />
      <section>
        <Essentials text={"応募規約"} />
        <div className={styles.body}>
          <ul className={styles.listItemBox}>
            <li className={styles.listItem}>
              ・以下から必ず「応募規約」をご確認頂き、同意の上でご応募ください。
            </li>
            <li className={styles.listItem}>
              ・非公開設定やハッシュタグのない投稿、加工された画像は無効とさせて頂きます。
            </li>
            <li className={styles.listItem}>
              ・撮影した写真の元データは、優秀作品の結果発表までお手元に保管ください。（カレンダーに使用する場合、提出をお願いする可能性があります。）
            </li>
          </ul>
          <PrimaryButton text={"【応募規約】必ずお読みください"} />
        </div>
      </section>
      <section>
        <Essentials text={"テーマ"} />
        <div className={styles.body}>
          <ul className={styles.listItemBox}>
            <li
              className={`${styles.listItem} ${styles.listItemMain}`}
            >
              あなたイチオシの流山の風景
            </li>
            <li className={styles.listItem}>
              ※個人を特定できる人物は含めない写真としてください。
            </li>
            <li className={styles.listItem}>
              ※過去に撮影した写真も投稿可能です。
            </li>
          </ul>
          <PrimaryButton text={"【応募規約】必ずお読みください"} />
        </div>
      </section>
      <section>
        <Essentials text={"スケジュール"} />
        <div className={styles.body}>
          <ul className={styles.listItemBox}>
            <li
              className={`${styles.listItem} ${styles.listItemMain}`}
            >
              <div className={styles.listItemLabel}>【募集期間】</div>
              <div>2021年11月20日〜12月31日23:59</div>
            </li>
            <li
              className={`${styles.listItem} ${styles.listItemMain}`}
            >
              <div className={styles.listItemLabel}>
                【優秀作品決定】
              </div>
              <div>2022年1月中旬</div>
            </li>
            <li className={styles.listItem}>
              審査の結果、優秀作品に選ばれた方には、流山ツーリズムデザインから、Instagramのダイレクトメールへご連絡します。
            </li>
            <li className={styles.listItem}>
              優秀作品は、以下の流山ツーリズムデザインWEBサイトで発表予定です。
            </li>
            <li className={styles.listItem}>
              https://nagareyama-td.com/
            </li>
          </ul>
        </div>
      </section>
      <section>
        <Essentials text={"応募方法"} />
        <div className={styles.body}>
          <SecondaryButton text={"応募方法はこちら"} />
        </div>
      </section>
      <section>
        <Essentials text={"優秀作品の特典"} />
        <div className={styles.body}>
          <ul className={styles.listItemBox}>
            <li className={styles.listItem}>
              審査の結果、優秀作品に選ばれた方には以下特典があります。
            </li>
            <li className={styles.listItem}>
              ・優秀作品をまとめて4月始まりのカレンダーとして、流山市内で販売します。（優秀作品に選ばれた方には、カレンダーをプレゼント）
            </li>
            <li className={styles.listItem}>
              ・流山市「杜のアトリエ黎明」での、優秀作品展示会で展示予定です。
            </li>
          </ul>
        </div>
      </section>
      <section>
        <Essentials text={"アドバイザー"} />
        <div className={styles.body}>
          <div className={styles.adviserPhoto}>
            <Image src={Mayumiotsuka} alt="大塚まゆみプロフィール" />
          </div>
          <div className={styles.profile}>
            <h3 className={styles.prfileName}>
              大塚まゆみ
              <span className={styles.adviserInstaIcon}>
                <Image src={Instagram} alt="インスタグラム" />
              </span>
            </h3>
            <span className={styles.profileJob}>
              フォトグラファー（流山市在住）
            </span>
          </div>
          <ul className={styles.listItemBox}>
            <li
              className={styles.listItem}
              style={{ marginBottom: 16 }}
            >
              2014年よりフリーランスフォトグラファーとして活動開始。　キッズ・ファミリーフォトを経て、ファッション、ブライダル、スタジオ撮影（人物・物撮り）などジャンルを問わず撮影。
              <br />
              人物撮影を得意とし、WEB、広告など幅広く活躍中。
            </li>
            <li className={styles.listItem}>
              Web site：
              <Link href="https://mayumiotsuka.com">
                <a className={styles.ListItemLink} target="_blank">
                  https://mayumiotsuka.com
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              Photo studio：
              <Link href="https://photo45.net">
                <a className={styles.ListItemLink} target="_blank">
                  https://photo45.net
                </a>
              </Link>
            </li>
          </ul>
          <div className={styles.message}>
            流山市内には古き良き街並みも、新しく近代的な側面も、四季折々楽しめる自然も揃っています。
            <br />
            皆様の一推しのスポットや好き！を詰め込んで下さい。たくさんのすばらしい作品に出合えるのを楽しみにしています！
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boshuyoukou;
