import { ComponentProps, ComponentType } from "@/types";
import Link from "./Link";
import Menu from "./Menu";
import Text from "./Text";
import HtmlCssTemplate from "./HtmlCssTemplate";

const ComponentFactory = (props: ComponentProps) => {
  switch (props.__component) {
    case ComponentType.LINK:
      return <Link {...props} />;
    case ComponentType.MENU:
      return <Menu {...props} />;
    case ComponentType.TEXT:
      return <Text {...props} />;
    case ComponentType.HTML_CSS_TEMPLATE:
      return <HtmlCssTemplate {...props} />;
    default:
      return null;
  }
};

export default ComponentFactory;
