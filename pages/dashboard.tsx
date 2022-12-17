import Head from "next/head";
import { PrivatePage } from "../components/common/PrivatePage";
import { PrivateDashboard } from "../components/private/PrivateDashboard";

export default function dashboard() {
  return (
    <PrivatePage>
      <Head>
        <title />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrivateDashboard />
    </PrivatePage>
  );
}
