import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>
      <h1>{id}번 상품상세페이지</h1>
    </div>
  );
}
