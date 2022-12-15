import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
import { PrivateNavigation } from "../private/PrivateNavigation";

interface PrivatePageProps {
  children: ReactNode;
}

export const PrivatePage: FC<PrivatePageProps> = ({ children }) => {
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

  if (session && session.user.paid === true) {
    return (
      <>
        <PrivateNavigation user={session.user} />
        <div className="mx-auto max-w-7xl">{children}</div>
      </>
    );
  }

  return null;
};
