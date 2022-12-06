/* eslint-disable camelcase */
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// const stripePromise = loadStripe(
// process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );
export default function Paid() {
  const router = useRouter();
  const { session_id } = router.query;

  const [email, setEmail] = useState();

  const { data: session, status } = useSession();

  const loading = status === "loading";

  useEffect(() => {
    const call = async () => {
      const response = await fetch("/api/stripe/success", {
        method: "POST",
        body: JSON.stringify({
          session_id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setEmail(data.email);
    };

    call();
  }, [session_id]);

  if (loading) return null;

  if (session) {
    router.push("/dashboard");
  }

  return (
    <div>
      <h2 data-cy="successfully-joined-heading">
        Success, thank you for joining us!!
      </h2>
      <button type="button" onClick={() => signIn("email", { email })}>
        Last step is to confirm you email to sign in
      </button>
    </div>
  );
}

export async function getServerSideProps() {
  // we need this or the router query data is not available client-side
  // see https://nextjs.org/docs/api-reference/next/router#router-object
  return {
    props: {},
  };
}
