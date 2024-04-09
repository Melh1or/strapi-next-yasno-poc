import { ComponentProps } from "@/types";
import { api } from "@/utils/api";

export interface PageResponse {
  data: {
    id: number;
    attributes: {
      Title: string;
      Content: ComponentProps[];
    };
  }[];
}

export const getPage = (title: string): Promise<PageResponse> => {
  return api(`/pages?populate=*&filters[uri][$eqi]=${title}`);
};
