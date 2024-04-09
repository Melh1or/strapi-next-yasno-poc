import { api } from "@/utils/api";
import type { DateTimeString, ComponentProps, LinkProps } from "@/types";

export type GetRestaurantsResponse = {
  data: {
    id: number;
    attributes: {
      createdAt: DateTimeString;
      updatedAt: DateTimeString;
      publishedAt: DateTimeString;
      Navbar: ComponentProps[];
      RightButton: LinkProps;
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
  return api(
    "/header?populate[Navbar][populate]=*&populate[Logo][populate]=*&populate[RightButton][populate]=*"
  );
};
