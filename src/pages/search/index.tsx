import { useRouter } from "next/router";
import styles from "./index.module.css";
import { ReactNode } from "react";
import SearchbarLayout from "@/component/searchbar-layout";
import { GetServerSidePropsContext } from "next";
import { fetchSales } from "@/util/fetch-sales";
import { InferGetServerSidePropsType } from "next";
import SaleItem from "@/component/sale-item";
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const q = context.query.q;
  const sales = await fetchSales(q as string);
  return { props: { sales: sales } };
}
export default function Page({
  sales,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {sales.map((sale) => (
        <SaleItem key={sale.id} {...sale} />
      ))}
    </div>
  );
}
Page.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
