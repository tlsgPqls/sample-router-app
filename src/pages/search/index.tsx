// import Head from "next/head";
// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// import styles from "@/styles/Home.module.css";

import { useRouter } from "next/router";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {
//   return (
//     <>
//       <h1>Hello Next.js</h1>
//     </>
//   );
// }
import styles from "./index.module.css";
import { ReactNode } from "react";
import SearchbarLayout from "@/component/searchbar-layout";

export default function Page() {
  const router = useRouter();
  const query = router.query.q;
  return (
    <div>
      <h1>검색어:{query} 페이지입니다</h1>
    </div>
  );
}
Page.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
