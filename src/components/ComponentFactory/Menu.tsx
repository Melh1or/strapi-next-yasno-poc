"use client";

import { MenuProps } from "@/types";
import { useState } from "react";
import s from "./Menu.module.css";
import Icon from "../Icon";

const Menu = ({ Title, Menu }: MenuProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={s.menu}
      style={{ display: "inline-block", position: "relative" }}
      onMouseMove={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {Title} <Icon name="IconHomeBold" />
      {visible && (
        <ul className={s.menuDropdown}>
          {Menu.map((item) => (
            <li key={item.id}>
              <a href={item.To}>{item.Title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
