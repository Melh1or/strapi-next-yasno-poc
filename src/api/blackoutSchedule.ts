import { DateTimeString } from "@/types";
import { api } from "@/utils/api";

export type GetBlackoutSchedule = {
  data: {
    attributes: {
      createdAt: DateTimeString;
      updatedAt: DateTimeString;
      publishedAt: DateTimeString;
      Visible: boolean;
      Text: string;
      BoldText: string;
      path: string;
    };
  };
};

export const getBlackoutSchedule = (): Promise<GetBlackoutSchedule> => {
  return api("/blackout-schedule");
};
