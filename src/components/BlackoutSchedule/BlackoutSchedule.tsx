import { getBlackoutSchedule } from "@/api/blackoutSchedule";
import Icon from "../Icon";
import s from "./BlackoutSchedule.module.css";

export const revalidate = 5;

export default async function BlackoutSchedule() {
  const blackoutSchedule = await getBlackoutSchedule();

  if (!blackoutSchedule.data || !blackoutSchedule.data.attributes.Visible) {
    return null;
  }

  return (
    <div className={s.container}>
      <div>
        {blackoutSchedule.data?.attributes.Text}
        <a href={blackoutSchedule.data?.attributes.path} className={s.link}>
          {blackoutSchedule.data?.attributes.BoldText}{" "}
          <Icon className={s.arrow} name="IconArrowGoToBold" />
        </a>
      </div>
      <a className={s.closeButton} href="/api/blackout-schedule">
        <Icon name="IconRemoveCloseBold" />
      </a>
    </div>
  );
}
