import { api } from "@/utils/api";
import type { StrapiFindManyResponseDto, Category } from "@/types";

export type GetCategoriesResponse = StrapiFindManyResponseDto<Category>;

export const getCategories = (): Promise<GetCategoriesResponse> => {
  return api("/categories");
};
