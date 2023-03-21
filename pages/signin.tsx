import type { GetServerSideProps, NextPage } from "next";
import { getProviders, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdLock } from "react-icons/md";
import { LoginFormInput } from "types/types";
import { Button } from "../components/common/Button";
import { Spinner } from "../components/common/Spinner";

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

  const handleBackButton = () => {
    router.push("/");
  };

  return (
    <div>
      {loading ? (
        <Spinner size="md" />
      ) : (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <div className="flex h-full w-auto justify-center">
                <Image
                  className="h-8 w-auto sm:h-10"
                  src="/images/dinobeet_dumbells.svg"
                  width="60"
                  height="60"
                  alt="embipi logo"
                />
              </div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
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
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                    placeholder="Email address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,9}$/i,
                        message: "Invalid email address.",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <MdLock className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  Sign in
                </button>
              </div>
            </form>

            <div className="w-full pt-2 text-center">
              <Button dataCy="back-btn" onClick={handleBackButton}>
                Back
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: { providers: await getProviders() },
});
