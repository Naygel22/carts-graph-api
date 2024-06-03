export const getAllCarts = async () => {
  const response = await fetch('https://dummyjson.com/carts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data
}
