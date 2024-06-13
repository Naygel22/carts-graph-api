import { httpClient } from "./httpClient";

export const deleteCartById = async (id: string) => {
  const { data } = await httpClient.delete(`/carts/${id}`)
  return data;
}
