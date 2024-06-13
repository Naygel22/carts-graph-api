import { Cart } from "../types/types";
import { httpClient } from "./httpClient";

export const getCartById = async (id: string) => {
  const { data } = await httpClient.get<Cart>(`/carts/${id}`)
  return data;
}
