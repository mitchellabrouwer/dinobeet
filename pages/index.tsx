import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Page } from "../components/common/Page";
import { Landing } from "../components/home/Landing";

export default function Index() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const loading = status === "loading";

  if (loading) {
    return null;
  }

  if (session && session?.user) {
    router.push("/dashboard");
  }

  return (
    <Page>
      <Head>
        <title />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing user={session?.user || null} />
    </Page>
  );
}
