import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../../components/common/Button";

const VerifyRequest: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>dinobeet</title>
        <meta
          name="dino beet verify request"
          content="Page to notificate user to check email"
        />
      </Head>

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Almost there!
            </h2>
          </div>
          <div className="bg-gray-50 text-center sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Check your email.
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>A sign in link has been sent to your email address.</p>
                <p>Sometimes it can take more than 1 minute to be sent...</p>
              </div>
              <div className="mt-2 max-w-xl text-xs font-bold text-red-900">
                <p>
                  If it goes beyond that time please take a look at your
                  junk/spam folder
                </p>
              </div>
            </div>
          </div>
          <div className="pt-2">
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
        </div>
      </div>
    </>
  );
};

export default VerifyRequest;
