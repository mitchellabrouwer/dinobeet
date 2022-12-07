import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const loading = status === "loading";

  useEffect(() => {
    if (!loading && !session) {
      router.push("/");
    }

    if (!loading && session && !session.user.paid) {
      router.push("/new-user");
    }
  }, [loading, router, session]);

  if (loading) {
    return null;
  }

  if (session && session.user.paid) {
    return <div data-cy="dashboard-page-heading">private dashboard</div>;
  }
}
