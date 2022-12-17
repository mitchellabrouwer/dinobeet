/* eslint-disable react/no-unknown-property */
import { Inter } from "@next/font/google";
// import localFont from "@next/font/local";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/globals.css";

// const myFont = localFont({
//   src: "../public/fonts/Inter-VariableFont.woff2",
//   display: "swap",
// });

// const inter = Inter();
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <SessionProvider session={pageProps.session}>
        <main className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
