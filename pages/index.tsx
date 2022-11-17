import Head from "next/head";
import { Page } from "../components/common/Page";
import { Introduction } from "../components/home/Introduction";

export default function Home() {
  return (
    <Page>
      <Head>
        <title />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Introduction />
    </Page>
  );
}
