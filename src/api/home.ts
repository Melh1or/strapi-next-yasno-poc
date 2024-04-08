import { api } from "@/utils/api";
import type { DateTimeString } from "@/types";

interface Image {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
}

export type GetRestaurantsResponse = {
  data: {
    id: 1;
    attributes: {
      createdAt: DateTimeString;
      updatedAt: DateTimeString;
      publishedAt: DateTimeString;

      Title: string;
      SubTitle: string;
      Image: Image;

      CabinetTitle: string;
      CabinetDescription: string;
      CabinetButton: string;
      CabinetLink: string;

      AccountTitle: string;
      AccountDescription: string;
      AccountButton: string;
      AccountLink: string;

      QuoteTitle: string;
      QuoteSubTitle: string;
      QuoteAuthor: string;
      Quote: string;
      QuoteImage: Image;
    };
  };
};

export const getHome = (): Promise<GetRestaurantsResponse> => {
  return api(
    "/homepage?populate[Image][populate]=*&populate[QuoteImage][populate]=*&populate=*"
  );
};
