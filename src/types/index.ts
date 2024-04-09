export type DateTimeString = string;

export enum ComponentType {
  LINK = "shared.link",
  MENU = "shared.menu",
  TEXT = "shared.text",
  HTML_CSS_TEMPLATE = "shared.html-css-template",
}

export interface LinkProps {
  id: number;
  __component: ComponentType.LINK;
  Title: string;
  To: string;
}

export interface HtmlCssTemplateProps {
  id: 1;
  __component: "shared.html-css-template";
  Html: string;
  Css: string;
}

export interface MenuProps {
  id: number;
  __component: ComponentType.MENU;
  Title: string;
  Menu: {
    id: number;
    Title: string;
    To: string;
  }[];
}

export interface TextProps {
  id: number;
  __component: ComponentType.TEXT;
  text: string;
  variant: string;
  color: string;
}

export type ComponentProps =
  | LinkProps
  | MenuProps
  | TextProps
  | HtmlCssTemplateProps;

export interface StrapiFindManyResponseDto<T> {
  data: T[];
  meta: StrapiMeta;
}

export interface StrapiMeta {
  pagination: StrapiPaginationResponse;
}

export interface StrapiPaginationResponse {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Restaurant {
  id: number;
  attributes: {
    Name: string;
    Description: Array<{
      type: string;
      children: Array<{
        text: string;
        type: string;
      }>;
    }>;
    createdAt: DateTimeString;
    updatedAt: DateTimeString;
    publishedAt: DateTimeString;
  };
}

export interface Category {
  id: number;
  attributes: {
    Name: string;
    createdAt: DateTimeString;
    updatedAt: DateTimeString;
    publishedAt: DateTimeString;
  };
}
