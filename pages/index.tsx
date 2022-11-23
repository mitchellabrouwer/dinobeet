import Head from "next/head";
import { Page } from "../components/common/Page";
import { Landing } from "../components/home/Landing";

export default function Home() {
  return (
    <Page>
      <Head>
        <title />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </Page>
  );
}
