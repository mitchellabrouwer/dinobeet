import type { GetServerSideProps, NextPage } from "next";
import { getProviders, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdLock } from "react-icons/md";
import { LoginFormInput } from "types/types";
import { Button } from "../../components/common/Button";
import { Page } from "../../components/common/Page";
import { Spinner } from "../../components/common/Spinner";

const Signin: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const loading = status === "loading";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({ mode: "onBlur" });

  if (loading) {
    return <Spinner size="lg" />;
  }

  if (session) {
    router.push(`/dashboard/`);
  }

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    const abortController = new AbortController();
    console.log("here");

    const submit = async () => {
      try {
        signIn("email", { email: data.email });
      } catch (error) {
        console.log(error);
      }
    };
    submit();
    return () => {
      abortController.abort();
    };
  };

  return (
    <Page>
      {loading ? (
        <Spinner size="md" />
      ) : (
        <div className="flex w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <div className="flex h-full w-auto justify-center">
                <Image
                  className="h-60 w-auto"
                  src="/images/dinobeet_skate.svg"
                  width="60"
                  height="60"
                  alt="embipi logo"
                  priority
                />
              </div>
              <h2 className="mt-6 text-center text-3xl font-extralight text-gray-900">
                Welcome to Dinobeet
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Please sign in
              </p>
            </div>
            <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dino-green-500 focus:outline-none focus:ring-dino-green-500 sm:text-sm"
                    placeholder="Email address"
                    {...register("email", {
                      required: "email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,9}$/i,
                        message: "invalid email address.",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="flex w-full justify-center">
                      <span className="m-2 text-sm italic text-red-500">
                        {errors.email.message}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  colour="primary"
                  variant="solid"
                  accessibilityLabel="log in to account"
                  type="submit"
                  icon
                >
                  <MdLock className="h-4 w-4 text-white" aria-hidden="true" />
                  Sign in
                </Button>

                <Button
                  dataCy="back-btn"
                  colour="primary"
                  variant="outline"
                  accessibilityLabel="go to dashboard"
                  onClick={() => router.push("/")}
                >
                  Back
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Page>
  );
};

export default Signin;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: { providers: await getProviders() },
});
