import { getHeader } from "@/api/header";
import ComponentFactory from "../ComponentFactory";
import { BASE_FILE_URL } from "@/utils/api";

export const revalidate = 5;

import s from "./Header.module.css";
import Link from "next/link";
import Icon from "../Icon";

export default async function Header() {
  const header = await getHeader();
  console.log("header?.data?.attributes", header?.data?.attributes);

  return (
    <div className={s.header}>
      <Link href="/">
        <img
          alt=""
          src={
            BASE_FILE_URL + header?.data?.attributes.Logo.data.attributes?.url
          }
        />
      </Link>

      <div className={s.nav}>
        {header?.data?.attributes.Navbar.map((component) => (
          <ComponentFactory {...component} />
        ))}
      </div>

      <div className={s.center}>
        <Link
          className={s.link}
          href={header?.data?.attributes?.RightButton?.To}
        >
          {header?.data?.attributes?.RightButton?.Title}
          <Icon name="IconArrowGoToBold" className={s.linkIcon} />
        </Link>
      </div>
    </div>
  );
}
