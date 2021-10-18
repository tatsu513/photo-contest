import Link from "next/link";
import Head from "next/head";
import TopImage from "@/components/TopImage";
import Ichioshi from "@/components/Ichioshi";
import Yushusakuhin from "@/components/Yushusakuhin";
import Posts from "@/components/Posts";
import HowToApply from "@/components/Apply";
import Torikatakouza from "@/components/Torikatakouza";
import Boshuyoukou from "@/components/Boshuyoukou";

const IndexPage = () => (
  <>
    <Head>
      <title>流山カレンダーフォトコンテスト</title>
    </Head>
    <TopImage />
    <Ichioshi />
    <Yushusakuhin />
    <Posts />
    <HowToApply />
    <Torikatakouza />
    <Boshuyoukou />
  </>
);

export default IndexPage;
