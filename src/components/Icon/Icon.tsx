import Image from "next/image";
import IconArrowGoToBold from "./Icon-Arrow-Go-to-Bold.svg";
import IconComputerRegular from "./Icon-Computer-Regular.svg";
import IconHomeBold from "./Icon-Home-Bold.svg";
import IconRemoveCloseBold from "./Icon-Remove-Close-Bold.svg";

const config = {
  IconArrowGoToBold,
  IconComputerRegular,
  IconRemoveCloseBold,
  IconHomeBold,
};

export type IconName = keyof typeof config;

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: IconName;
}

const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = config[name];

  return <Image src={IconComponent} alt={name} {...props} />;
};

export default Icon;
