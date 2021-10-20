import Link from "next/link";
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
import { useContext } from "react";
import BoshuyoukouLg from "@/components/BoshuyoukouLg";

const IndexPage = () => {
  const ctx = useContext(ContextData);
  const isLg = ctx.windowWidth > 1025;
  return (
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
      {isLg ? <BoshuyoukouLg /> : <Boshuyoukou />}
      <Footer />
    </>
  );
};

export default IndexPage;
