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
    "EAAqkOD7kZBkkBAF0aT6G2lVXUz8ZC6b4kQDVdlqq1CVxXLNOalfbjfF6MXbgWidGY2zlKJHZAVPdLRBiZARjGio2XVqkji6oEqMewmLE3NZCfeFWCwCEwPVUIXaZAsZALT2H24wrusjqBx4fOxl9PZBUfE1gXew8nc6q6kOs3pEBV8BkmZBnqOT2z";
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
