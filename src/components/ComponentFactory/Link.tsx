import { LinkProps } from "@/types";

const Link = ({ Title, To }: LinkProps) => {
  return <a href={To}>{Title}</a>;
};

export default Link;
