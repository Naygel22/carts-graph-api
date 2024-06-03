import { Cart } from "../types/types";

export const getCartById = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/carts/${id}`)
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json() as Cart
  return data;
}
