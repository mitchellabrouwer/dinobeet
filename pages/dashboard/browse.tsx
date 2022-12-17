import Head from "next/head";
import { PrivatePage } from "../../components/common/PrivatePage";
import { Browse } from "../../components/private/browse/Browse";

export default function BrowsePage() {
  return (
    <PrivatePage>
      <Head>
        <title />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Browse />
    </PrivatePage>
  );
}
