import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Page } from "../components/common/Page";
import { Landing } from "../components/home/Landing";

export default function Index() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const loading = status === "loading";

  useEffect(() => {
    if (!loading && session && session.user.paid === false) {
      router.push("/new-user");
    }

    if (!loading && session && session.user.paid === true) {
      router.push("/dashboard");
    }
  }, [loading, router, session]);

  if (loading) {
    return null;
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
