import { getCopyright } from "@/api/copyright";
import s from "./Footer.module.css";

const Footer = async () => {
  const copyright = await getCopyright();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div>{copyright.data.attributes.left}</div>
        <div className={s.separator} />
        <div>{copyright.data.attributes.right}</div>
      </div>
    </footer>
  );
};

export default Footer;
