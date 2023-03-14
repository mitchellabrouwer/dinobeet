import { Head } from "next/document";
import { PrivatePage } from "../../components/common/PrivatePage";

export default function Random() {
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
