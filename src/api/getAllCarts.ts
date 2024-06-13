import { CartsResponse } from "../types/types";
import { httpClient } from "./httpClient";

export const getAllCarts = async () => {
  const { data } = await httpClient.get<CartsResponse>(`/carts`)
  return data
}
