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

interface TextWithIcon {
  id: number;
  text: string;
  icon: {
    name: any;
  };
}

interface Accordion {
  id: number;
  title: string;
  description: string;
  detailsLink: string;
  detailsText: string;
  backgroundColor: string;
  img: Image;
  textWithIcon: TextWithIcon[];
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
      CabinetIcon: any;

      AccountTitle: string;
      AccountDescription: string;
      AccountButton: string;
      AccountLink: string;
      AccountIcon: any;

      QuoteTitle: string;
      QuoteSubTitle: string;
      QuoteAuthor: string;
      Quote: string;
      QuoteImage: Image;

      ApproachTitle: string;
      ApproachSubtitle: string;

      accordion: Accordion[];
    };
  };
};

export const getHome = (): Promise<GetRestaurantsResponse> => {
  const populates = [
    "Image",
    "QuoteImage",
    "accordion",
    "accordion.img",
    "accordion.textWithIcon",
    "accordion.textWithIcon.icon",
  ]
    .map((populate, i) => `populate[${i}]=${populate}`)
    .join("&");

  return api("/homepage" + "?" + populates);
};
