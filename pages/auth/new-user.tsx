import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "../../components/common/Button";
import { handleJoinClick } from "../../lib/utils";

export default function NewUser() {
  const router = useRouter();

  const { data: session, status } = useSession();

  const loading = status === "loading";

  useEffect(() => {
    if (!loading && !session) {
      router.push("/");
    }

    if (!loading && session && session.user.paid === true) {
      router.push("/dashboard");
    }
  }, [loading, router, session]);

  if (loading) {
    return null;
  }

  // Add user information to this page? Optional age, weight can changge these any time?
  return (
    <div>
      <h2>Joining fee of $9.99</h2>
      <Button
        accessibilityLabel="pay here"
        colour="primary"
        variant="outline"
        onClick={handleJoinClick}
      >
        Pay with stripe
      </Button>
    </div>
  );
}
