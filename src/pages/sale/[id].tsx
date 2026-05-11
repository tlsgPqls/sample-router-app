import { useRouter } from "next/router";
import sales from "@/mock/sales.json";
import style from "./[id].module.css";
import Image from "next/image";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { fetchSalesId } from "@/util/fetch-sales";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;
  const sales = await fetchSalesId(Number(id));
  return { props: { sales } };
}
export default function Page({
  sales,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!sales) return <div>뭔가 문제가 생겼어요. 다시 시도해주세요.</div>;
  const { id, productName, description, price, photo } = sales[0];
  const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${photo}`;
  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url(${imageUrl}')` }}
      >
        <Image
          src={imageUrl}
          alt={`${productName}의 사진`}
          width={300}
          height={300}
          className={style.cover_img}
        />
      </div>
      <div>
        <div className={style.title}>{productName}</div>
        <div className={style.description}>{description}</div>
        <div className={style.price}>{price.toLocaleString()}원</div>
      </div>
    </div>
  );
}
