import Head from "next/head";
import TopImage from "@/components/TopImage";
import Ichioshi from "@/components/Ichioshi";
import Yushusakuhin from "@/components/Yushusakuhin";
import Posts from "@/components/Posts";
import HowToApply from "@/components/Apply";
import Torikatakouza from "@/components/Torikatakouza";
import Boshuyoukou from "@/components/Boshuyoukou";
import Footer from "@/components/Footer";
import { ContextData } from "./_app";
import { useContext, useEffect, useState } from "react";
import BoshuyoukouLg from "@/components/BoshuyoukouLg";
import Rules from "@/components/Rules";
import styles from "styles/modules/index.module.scss";
import smoothscroll from "smoothscroll-polyfill";
import { useRouter } from "next/router";

// 認証用
import { signIn, useSession } from "next-auth/client";
interface Props {
  postData: any;
}

const IndexPage: React.VFC<Props> = ({ postData }) => {
  const [session, loading] = useSession();

  const router = useRouter();
  console.log({ postData });
  const ctx = useContext(ContextData);
  const isLg = ctx.windowWidth > 1025;

  const [isOpenRules, setIsOpenroules] = useState(false);
  const openRules = () => {
    const body = document.querySelector("body");
    body.classList.add("isFixed");
    setIsOpenroules(true);
  };
  const closeRules = () => {
    const body = document.querySelector("body");
    body.classList.remove("isFixed");
    setIsOpenroules(false);
  };
  const goApply = () => {
    const target = document.getElementById("apply");
    target.scrollIntoView({
      behavior: "smooth",
    });
  };
  const goTorikata = () => {
    const target = document.getElementById("torikata");
    target.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  return (
    <>
      <Head>
        <title>流山カレンダーフォトコンテスト</title>
      </Head>
      {!session && (
        <>
          {loading ? (
            <p>Loading ...</p>
          ) : (
            <div>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>
            </div>
          )}
        </>
      )}
      {session && (
        <>
          <TopImage />
          <p onClick={() => router.push("/Login")}>ログイン</p>
          <Ichioshi goApply={goApply} />
          <Yushusakuhin />
          <Posts postData={postData} />
          <HowToApply goTorikata={goTorikata} />
          <Torikatakouza />
          {isLg ? (
            <BoshuyoukouLg onClick={openRules} goApply={goApply} />
          ) : (
            <Boshuyoukou onClick={openRules} goApply={goApply} />
          )}
          <Footer />
          <div
            className={`${styles.rulesWrapper} ${
              isOpenRules && styles.isOpen
            }`}
          >
            <Rules onClick={closeRules} />
          </div>
        </>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  const instagramId = process.env.NEXT_PUBLIC_INSTGRAM_ID;
  const query = encodeURI("マキアート");
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const hashId = process.env.NEXT_PUBLIC_HASH_ID;
  const getDataUrl = `https://graph.facebook.com/${hashId}/top_media?user_id=${instagramId}&q=${query}&access_token=${accessToken}&fields=id,media_type,media_url,permalink,like_count,comments_count,caption,timestamp,children{id,media_url}&limit=10`;

  const dataRes = await fetch(getDataUrl, { method: "GET" });
  const dataJson = await dataRes.json();
  const postData = dataJson;

  return { props: { postData } };
};

export default IndexPage;
