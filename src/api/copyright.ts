import { ComponentProps } from "@/types";
import { api } from "@/utils/api";

export interface PageResponse {
  data: {
    id: number;
    attributes: {
      left: string;
      right: string;
    };
  };
}

export const getCopyright = (): Promise<PageResponse> => {
  return api(`/copyright?populate=*`);
};
