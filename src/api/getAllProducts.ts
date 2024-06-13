import { httpClient } from "./httpClient";

export const getAllProducts = async () => {
  const { data } = await httpClient.get(`/products`)
  return data
}
