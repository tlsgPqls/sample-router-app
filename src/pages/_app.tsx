import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import RootLayout from "@/component/global-layout";
import { NextPage } from "next";
import { ReactNode } from "react";
type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactNode) => ReactNode;
};
export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  // const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);
  return (
    // <div>
    //   <header>
    //     <Link href={"/"}>home</Link> &nbsp;&nbsp;&nbsp;
    //     <Link href={"/search"}>search</Link> &nbsp;&nbsp;&nbsp;
    //     <Link href={"/sale/1"}>1번 상품</Link>
    //     <button
    //       onClick={() => {
    //         router.push("./sale/2");
    //       }}
    //     >
    //       2번 상품
    //     </button>
    //   </header>
    //   <Component {...pageProps} />
    // </div>
    <RootLayout>
      {getLayout(<Component {...pageProps} />)}
      {/* <Component {...pageProps} /> */}
    </RootLayout>
  );
}
