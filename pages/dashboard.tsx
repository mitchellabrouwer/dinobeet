import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const loading = status === "loading";

  if (loading) {
    return null;
  }

  if (!session) {
    return router.push("/");
  }

  if (session && !session.user.paid) {
    return router.push("/");
  }
  return (
    <>
      <div data-cy="dashboard-page-heading">private dashboard</div>
      <button type="button" onClick={() => signOut()}>
        Sign out
      </button>
    </>
  );
}
