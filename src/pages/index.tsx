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

interface Props {
  postData: string[];
}

const IndexPage: React.VFC<Props> = ({ postData }) => {
  return (
    <>
      <Head>
        <title>流山カレンダーフォトコンテスト</title>
      </Head>
      <TopImage />
      <Ichioshi />
      <Yushusakuhin />
      <Posts postData={postData} />
      <HowToApply />
      <Torikatakouza />
      <Boshuyoukou />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const instagramId = 17841450082182860;
  const query = encodeURI("マキアート");
  const accessToken =
    "EAAqkOD7kZBkkBAOxvYZA4pVTktnSdkKBXgm17duwa0ay5ueQjGCUKKnGPWLirLE5qvZB1cqMs8qrpQKOIgBpzPwfIjzUGCjwiIC79xkB5RB8ao3oM290eLzZArQr8npZBA5ECNPDaSlJRsrSNZBYlc8offSRYK7aGgfZAKLQmJWEgCfRVUBRHZAH";
  const idSearchUrl = `https://graph.facebook.com/ig_hashtag_search?user_id=${instagramId}&q=${query}&access_token=${accessToken}`;

  const res = await fetch(idSearchUrl, { method: "GET" });
  const json = await res.json();
  const hashId = json.data[0].id;

  const getDataUrl = `https://graph.facebook.com/${hashId}/top_media?user_id=${instagramId}&q=${query}&access_token=${accessToken}&fields=id,media_type,media_url,permalink,like_count,comments_count,caption,timestamp,children{id,media_url}&limit=10`;

  const dataRes = await fetch(getDataUrl, { method: "GET" });
  const dataJson = await dataRes.json();
  const postData = dataJson;

  return { props: { postData } };
};

export default IndexPage;
