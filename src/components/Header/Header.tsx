import { getHeader } from "@/api/header";
import ComponentFactory from "../ComponentFactory";
import { BASE_FILE_URL } from "@/utils/api";

export const revalidate = 5;

import s from "./Header.module.css";
import Link from "next/link";

export default async function Header() {
  const header = await getHeader();
  console.log(header);

  return (
    <div className={s.header}>
      <div>
        <Link href="/">
          <img
            alt=""
            width={100}
            height={50}
            src={
              BASE_FILE_URL + header?.data?.attributes.Logo.data.attributes?.url
            }
          />
        </Link>
      </div>

      <div className={s.nav}>
        {header?.data?.attributes.Navbar.map((component) => (
          <ComponentFactory {...component} />
        ))}
      </div>
    </div>
  );
}
