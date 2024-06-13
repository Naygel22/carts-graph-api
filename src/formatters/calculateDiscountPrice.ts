export const calculateDiscountPrice = (price: number, discountPercentage: number) => {
  return (price * (100 - discountPercentage)).toFixed(2)
}