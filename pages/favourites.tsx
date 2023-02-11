import Head from "next/head";
import { PrivatePage } from "../components/common/PrivatePage";

export default function Favourites() {
  return (
    <PrivatePage>
      <Head>
        <title />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Favourites />
    </PrivatePage>
  );
}
