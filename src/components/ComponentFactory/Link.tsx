import { LinkProps } from "@/types";
import s from "./Link.module.css";

const Link = ({ Title, To }: LinkProps) => {
  return (
    <a href={To} className={s.link} target="_blank" rel="noreferrer">
      {Title}
    </a>
  );
};

export default Link;
