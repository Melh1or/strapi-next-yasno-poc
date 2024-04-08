"use client";

import { MenuProps } from "@/types";
import { useState } from "react";

const Menu = ({ Title, Menu }: MenuProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      style={{ display: "inline-block", position: "relative" }}
      onMouseMove={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {Title}

      {visible && (
        <ul
          style={{
            position: "absolute",
            backgroundColor: "white",
            padding: "1rem",
            border: "1px solid black",
            bottom: -70,
          }}
        >
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
