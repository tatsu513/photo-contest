import styles from "styles/modules/Rules.module.scss";
import Link from "next/link";

interface Props {
  onClick: () => void;
}

const Rules: React.VFC<Props> = ({ onClick }) => {
  return (
    <div className={styles.rulesBox}>
      <div className={styles.closeButton} onClick={onClick} />
      <div className={styles.rulesContents}>
        <h1 className={styles.title}>応募規約</h1>
        <p className={styles.leadText}>
          当規約は、株式会社流山ツーリズムデザインが主催する「スマホ限定
          Instagramハッシュタグ投稿
          #流山カレンダー写真コンテスト」に投稿される方について定めたものです。
          以下お読みいただき、同意の上、ご参加ください。
          <br />
          ハッシュタグ「#流山カレンダー」をつけて投稿された場合は、本規約に同意したものとみなします。また、投稿者は参加に当たり、本規約に従うものとし、その運営方法について一切異議を申し立てないものとします。
        </p>
        <h4 className={styles.sectionTitle}>【投稿について】</h4>
        <p className={styles.text}>
          ・流山ツーリズムデザイン公式アカウント「@nagareyama_td」をフォローし、流山市内のおすすめ風景をスマホで撮影した写真をハッシュタグ「#流山カレンダー」と位置情報をつけてInstagramに投稿してください。
          投稿の中から、流山ツーリズムデザインが選んだ投稿をWEBサイトに掲載します。全ての投稿が掲載される訳ではありません。予めご了承ください。
          <br />
          ・投稿いただく写真・テキストは投稿者本人のオリジナル作品に限定します。
          <br />
          ・第三者の知的財産が含まれる場合は、必ず使用許諾を得て投稿してください。
          <br />
          ・投稿者は、投稿内容について適法な権利を有していることを保証するものとします。
          <br />
          ・投稿者は、投稿内容が第三者の権利を侵害しないことを保証するものとします。
          <br />
          ・肖像権・著作権侵害等の責任は負いかねます。万一、第三者と紛争等が生じた場合には、全て投稿者の責任とします。
          <br />
        </p>
        <h4 className={styles.separatorTitle}>
          ＜以下の投稿は行わないでください＞
        </h4>
        <p className={styles.text}>
          ・個人を特定できる人物が含まれた投稿
          <br />
          ・他人の知的財産権・肖像権等の権利やプライバシー等の侵害、嫌がらせや悪口により名誉・信用を傷つけることや差別など、他者に不利益を与える投稿
          <br />
          ・公序良俗に反する内容及びその他閲覧者を不愉快にさせる投稿
          <br />
          ・広告宣伝、営業活動、選挙活動、特定の思想・宗教への勧誘等を目的とする投稿
          <br />
          ・住所等個人情報その他個人を特定できる情報が含まれる投稿
          <br />
          ・その他、流山ツーリズムデザインが悪質又は不適切と判断する投稿
        </p>
        <h4 className={styles.sectionTitle}>【優秀作品について】</h4>
        <p className={styles.text}>
          ・流山ツーリズムデザインが選定した審査員が、投稿の中から厳正な審査の上、優秀作品を決定します。
          <br />
          ・優秀作品に入選された方（以下、入選者）には流山ツーリズムデザイン公式アカウントからダイレクトメッセージを送信し、賞品発送やカレンダー作成に必要な情報のご回答を依頼します。所定の期日までにご連絡のない場合や、必要な情報をご連絡いただけない場合は入選を無効とさせていただきます。
          <br />
          ・優秀作品は、流山ツーリズムデザインWEBサイト内（
          <Link href="https://nagareyama-td.com/">
            <a target="_blank">https://nagareyama-td.com/</a>
          </Link>
          ）で発表し、2022年4月始まりのカレンダーとしてまとめ、流山市内で販売・入選者へ賞品としてご指定の住所へ郵送します。また、流山市「杜のアトリエ黎明」の優秀作品展示会で展示します。
          <br />
          ・賞品の郵送中の紛失等事故については責任を負いかねます。
          <br />
          ・やむを得ない事情により、賞品の内容は変更になる場合があります。
          <br />
        </p>
        <h4 className={styles.separatorTitle}>
          ＜以下の投稿は無効となります＞
        </h4>
        <p className={styles.text}>
          ・流山市以外で撮影された画像の投稿
          <br />
          ・「非公開アカウント」からの投稿
          <br />
          ・ハッシュタグ「#流山カレンダー」がない投稿
          <br />
          ・流山ツーリズムデザイン公式アカウント「@nagareyama_td」のフォローがない投稿
          <br />
        </p>
        <h4 className={styles.sectionTitle}>
          【著作権・個人情報について】
        </h4>
        <p className={styles.text}>
          ・受賞作品の著作権は応募者に帰属します。
          <br />
          ・投稿はリポスト・広報物・流山ツーリズムデザインのWEBサイト、優秀作品は流山市内で販売するカレンダー・展示会などで入選者の許諾を要することなく無償で利用できるものとします。また、広報活動等のため投稿作品を第三者に無償で貸与することがあります。写真の二次利用にご承諾いただける方のみご参加をお願いします。
          <br />
          ・投稿作品を広報活動等に使用する場合、必要に応じて画像のトリミングや色調の補正等の加工を行う場合があります。
          <br />
          ・応募時にご記入いただいた個人情報は、主催者が厳重に管理し、本コンテストに関連する業務についてのみ使用します。（入賞通知・賞品などの送付・作品返却など）また、このため業務委託会社に情報を開示する場合があります。
        </p>
        <h4 className={styles.sectionTitle}>【賠償責任について】</h4>
        <p className={styles.text}>
          ・参加に際し、投稿者が本規約に違反し、又は不正もしくは違法な行為により、流山ツーリズムデザイン又は第三者に損害を与えた場合、投稿者はその損害を賠償しなければならないものとします。
          <br />
          ・本企画の参加に関し、投稿者と第三者との間に紛争が生じた場合、投稿者は自らの責任と費用負担によりその紛争を解決し、流山ツーリズムデザインに一切損害を与えないものとします。
          <br />
          ・投稿者が本規約に違反して流山ツーリズムデザインに損害を与えた場合、流山ツーリズムデザインは当該投稿者に対し、損害賠償を請求できるものとします。
        </p>
        <h4 className={styles.sectionTitle}>【免責・その他】</h4>
        <p className={styles.text}>
          ・流山ツーリズムデザインは、本コンテストについて細心の注意を払って運営をしていますが、提供する情報、各種サービス、その他本企画に関する全ての事項について、その完全性、正確性、安全性、有用性等について、いかなる保証をするものではありません。
          <br />
          ・以下の理由により投稿者又は第三者に生じた一切のトラブル・損害（直接・間接を問いません）等について、流山ツーリズムデザインは一切の責任を負わないものとします。
          <br />
          (1)ソフトウェア・ハードウェア上の事故、火災、停電、通信環境の悪化、地震、事変等の非常事態が発生した場合。
          <br />
          (2)本コンテストにおけるシステムの保守を定期的あるいは緊急に行う場合。
          <br />
          (3)投稿者間又は投稿者と第三者の間におけるトラブル等が生じた場合。
          <br />
          (4)第三者による本コンテストのサービスの妨害、情報改変などによりサービスが中断もしくは遅延、又は何らかの欠陥が生じた場合。
          <br />
          (5)故意又は重過失なくして本コンテストが提供する情報が誤送信されるか、もしくは欠陥があった場合。
          <br />
          ・流山ツーリズムデザインは、本コンテストの全部又は一部について、事前に通知することなく変更または中止することがあります。
          <br />
          ・本コンテストはInstagramが支援、承認、運営、関与するものではありません。Instagramの利用に当たっては、Instagramの利用規約を確認してください。
        </p>
        <h4 className={styles.sectionTitle}>
          【規約の変更について】
        </h4>
        <p className={styles.text}>
          ・流山ツーリズムデザインは、必要と判断した場合には、予告なく本規約を変更できるほか、本企画の適正な運用を確保するために必要な措置を取ることができます。
          <br />
          ・本規約が変更された場合は、全ての投稿者に対し、変更後の規約が適用されるものとします。また、変更後の規約は、別途定める場合を除き、当サイト上に表示した時点より、効力を生じるものとします。
          <br />
        </p>
        <h4 className={styles.sectionTitle}>【お問い合わせ】</h4>
        <p className={styles.text}>
          ・本キャンペーンに関するお問い合わせは、流山ツーリズムデザイン公式Instagramのダイレクトメッセージ（DM）機能よりお願いします。
          <br />
          @nagareyama_td
          <br />
        </p>
      </div>
    </div>
  );
};

export default Rules;