import { api } from "@/utils/api";
import type { DateTimeString, ComponentProps } from "@/types";

export type GetRestaurantsResponse = {
  data: {
    id: 1;
    attributes: {
      createdAt: DateTimeString;
      updatedAt: DateTimeString;
      publishedAt: DateTimeString;
      Navbar: ComponentProps[];
      Logo: {
        data: {
          id: number;
          attributes: {
            name: string;
            url: string;
          };
        };
      };
    };
  };
};

export const getHeader = (): Promise<GetRestaurantsResponse> => {
  return api("/header?populate[Navbar][populate]=*&populate[Logo][populate]=*");
};
