import { useRouter } from "next/router";
import { useState } from "react";
import { ChangeEvent } from "react";
import style from "./searchbar-layout.module.css";
export default function SearchbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setsearch] = useState("");
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setsearch(e.target.value);
  };
  const router = useRouter();
  const onSubmit = () => {
    if (!search || router.query.q == search) return;
    router.push(`/search?q=${search}`);
  };
  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          value={search}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하시오..."
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
