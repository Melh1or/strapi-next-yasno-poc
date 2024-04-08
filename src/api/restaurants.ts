import { api } from "@/utils/api";
import type { StrapiFindManyResponseDto, Restaurant } from "@/types";

export type GetRestaurantsResponse = StrapiFindManyResponseDto<Restaurant>;

export const getRestaurants = (): Promise<GetRestaurantsResponse> => {
  return api("/restaurants");
};
