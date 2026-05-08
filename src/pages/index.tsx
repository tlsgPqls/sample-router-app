// import Head from "next/head";
// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// import styles from "@/styles/Home.module.css";

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

import { useRouter } from "next/router";
import styles from "./index.module.css";
import { ReactNode } from "react";
import SearchbarLayout from "@/component/searchbar-layout";
import sales from "@/mock/sales.json";
import SaleItem from "@/component/sale-item";
export default function Home() {
  // const router = useRouter();
  // const query = router.query.q;
  return (
    <div className={styles.title}>
      <section>
        <h3>최신 등록 상품</h3>
        {sales.map((sale) => (
          <SaleItem key={sale.id} {...sale} />
        ))}
      </section>
    </div>
  );
}
Home.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
