"use client";

import { useState } from "react";
import s from "./VerticalAccordion.module.css";
import clsx from "clsx";
import Icon from "../Icon";

interface VerticalAccordionProps {
  sections: {
    backgroundColor: string;
    title: string;
    description: string;
    detailsLink: string;
    detailsText: string;
    img: string;
    items: {
      title: string;
      icon: any;
    }[];
  }[];
}

const VerticalAccordion = ({ sections }: VerticalAccordionProps) => {
  const [active, setActive] = useState(0);

  return (
    <div className={s.verticalAccordion}>
      {sections.map((section, index) => {
        return (
          <div
            style={{ backgroundColor: section.backgroundColor }}
            onClick={() => setActive(index)}
            className={clsx(s.verticalAccordionEl)}
          >
            <div className={clsx(s.verticalAccordionContent)}>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <div className={s.verticalAccordionList}>
                {section.items.map((item) => {
                  return (
                    <div className={s.verticalAccordionListItem}>
                      <div className={s.verticalAccordionListItemIcon}>
                        <Icon name={item.icon} />
                      </div>
                      <h3>{item.title}</h3>
                      <Icon name={"IconArrowGoToBold"} />
                    </div>
                  );
                })}
              </div>

              <a className={s.verticalAccordionLink} href={section.detailsLink}>
                {section.detailsText}
                <Icon name={"IconArrowGoToBold"} />
              </a>
            </div>
            {index === active && s.verticalAccordionElActive && (
              <img src={section.img} alt={section.title} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VerticalAccordion;
