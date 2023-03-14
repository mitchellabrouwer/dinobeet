import Head from "next/head";
import { PrivatePage } from "../../components/common/PrivatePage";
import { Random } from "../../components/private/random/Random";

export default function RandomPage() {
  return (
    <PrivatePage>
      <Head>
        <title />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Random />
    </PrivatePage>
  );
}
