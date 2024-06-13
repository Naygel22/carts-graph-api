import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getAllCarts } from "../api/getAllCarts"
import { getAllProducts } from "../api/getAllProducts";
import { useNavigate } from "react-router-dom";


export const AddCart = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ["products"], queryFn: getAllProducts })
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleChange = (productId: string | undefined) => {
    if (productId) {

    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading carts</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }


  return (
    <>
      <label htmlFor="userId">User ID:</label>
      <input type="number" name="userId" min="1" />
      <select name="products" onChange={(event) => handleChange(event.target.value)}>
        <option value="" disabled selected>
          Wybierz przedmiot
        </option>
        {data.products.map((product) => (
          <option key={product.id} value={product.id}>{`${product.title}`}</option>
        ))}
      </select>
    </>
  )
}
