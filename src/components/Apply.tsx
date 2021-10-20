import styles from "styles/modules/HowToApply.module.scss";
import Image from "next/image";
import flow01 from "images/flow01_sp.svg";
import flow03 from "images/flow03_sp.svg";
import insta from "images/insta_color_sp.png";
import SecondaryButton from "./buttons/SecondaryButton";
import PrimaryButton from "./buttons/PrimaryButton";
import TextTitle from "./commons/TextTitle";

const HowToApply = () => {
  return (
    <div className={styles.howToApplyBox}>
      <TextTitle text={"応募方法"} />
      <section className={styles.flows}>
        <ul>
          <li className={styles.flow}>
            <div className={styles.step}>
              <div className={styles.stepContent}>
                <span className={styles.stepText}>STEP</span>
                <span className={styles.stepNumber}>01</span>
              </div>
            </div>
            <p className={styles.stepBodyText}>
              主催の流山ツーリズムデザインInstagram公式アカウント
              <br />
              @nagareyama_td をフォロー
            </p>
            <div className={styles.flowImage}>
              <Image src={insta} alt="インスタグラム" />
            </div>
            <div className={styles.buttonWrapper}>
              <PrimaryButton text={"公式アカウントをフォロー"} />
            </div>
          </li>
          <li className={styles.flow}>
            <div className={styles.step}>
              <div className={styles.stepContent}>
                <span className={styles.stepText}>STEP</span>
                <span className={styles.stepNumber}>02</span>
              </div>
            </div>
            <p className={styles.stepBodyText}>
              あなたイチオシの流山の風景をスマホで撮る
              <br />
              （以前撮影した写真もOKです）
            </p>
            <div
              className={`${styles.flowImage} ${styles.flowImage2}`}
            >
              <Image src={flow01} alt="インスタグラム" />
            </div>
            <div className={styles.buttonWrapper}>
              <SecondaryButton
                text={"映える！スマホ写真の撮り方はこちら"}
              />
            </div>
            <div className={styles.notes}>
              <p className={styles.notesMain}>
                ※撮影した写真の元データは、優秀作品の結果発表までお手元に保管ください。
              </p>
              <p className={styles.notesSub}>
                （カレンダーに使用する場合、提出をお願いする可能性があります。）
              </p>
            </div>
          </li>
          <li className={styles.flow}>
            <div className={styles.step}>
              <div className={styles.stepContent}>
                <span className={styles.stepText}>STEP</span>
                <span className={styles.stepNumber}>03</span>
              </div>
            </div>
            <p className={styles.stepBodyText}>
              ハッシュタグ #流山カレンダー
              と場所を追加して、Instagramへ投稿！
            </p>
            <div
              className={`${styles.flowImage} ${styles.flowImage2}`}
            >
              <Image src={flow03} alt="インスタグラムへ投稿！" />
            </div>
            <div className={styles.buttonWrapper}>
              <SecondaryButton
                text={"映える！スマホ写真の撮り方はこちら"}
              />
            </div>
            <div className={styles.notes}>
              <p className={styles.notesMain}>
                ※投稿写真は加工しないでください。
              </p>
              <p className={styles.notesSub}>
                （加工で解像度が落ち、カレンダーに使用できない可能性があるため。）
              </p>
            </div>
          </li>
        </ul>
      </section>
      <div className="namiBox shiro" />
    </div>
  );
};

export default HowToApply;
