import Image from "next/image";
import IconArrowGoToBold from "./Icon-Arrow-Go-to-Bold.svg";
import IconComputerRegular from "./Icon-Computer-Regular.svg";
import IconHomeBold from "./Icon-Home-Bold.svg";
import IconRemoveCloseBold from "./Icon-Remove-Close-Bold.svg";
import IconCarRegular from "./Icon-Car-Regular.svg";
import IconLightEnergyFlashRegular from "./Icon-Light-Energy-Flash-Regular.svg";
import IconLightLampBulbRegular from "./Icon-Light-Lamp-Bulb-Regular.svg";
import IconPlugRegular from "./Icon-Plug-Regular.svg";

const config = {
  IconArrowGoToBold,
  IconComputerRegular,
  IconRemoveCloseBold,
  IconHomeBold,
  IconCarRegular,
  IconLightEnergyFlashRegular,
  IconLightLampBulbRegular,
  IconPlugRegular,
};

export type IconName = keyof typeof config;

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: IconName;
}

const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = config[name];

  return <Image src={IconComponent} alt="" {...props} />;
};

export default Icon;
