/* eslint-disable camelcase */
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Paid() {
  const router = useRouter();
  const { session_id } = router.query;

  const { data: session, status } = useSession();

  const loading = status === "loading";

  useEffect(() => {
    try {
      (async () => {
        await fetch("/api/stripe/success", {
          method: "POST",
          body: JSON.stringify({
            session_id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      })();

      // @ts-ignore
      window.location = "/dashboard";
    } catch (error) {
      console.log(error);
    }
  }, [session_id]);

  if (loading) {
    return null;
  }

  if (!session) {
    router.push("/");
  }

  return <div></div>;

  // return <div>Something went wrong please contact us directly</div>;
}

export async function getServerSideProps() {
  // we need this or the router query data is not available client-side
  // see https://nextjs.org/docs/api-reference/next/router#router-object
  return {
    props: {},
  };
}
