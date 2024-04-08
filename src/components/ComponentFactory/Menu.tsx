"use client";

import { MenuProps } from "@/types";
import { useState } from "react";

const Menu = ({ Title, Menu }: MenuProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      onMouseMove={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {Title}

      {visible && (
        <ul>
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
