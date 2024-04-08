import { getHeader } from "@/api/header";
import ComponentFactory from "../ComponentFactory";
import { BASE_URL } from "@/utils/api";

export const revalidate = 5;

import s from "./Header.module.css";

export default async function Header() {
  const header = await getHeader();

  return (
    <div className={s.header}>
      <div>
        <img
          alt=""
          width={100}
          height={50}
          src={BASE_URL + header?.data?.attributes.Logo.data[0].attributes?.url}
        />
      </div>

      <div className={s.nav}>
        {header?.data?.attributes.Navbar.map((component) => (
          <ComponentFactory {...component} />
        ))}
      </div>
    </div>
  );
}
