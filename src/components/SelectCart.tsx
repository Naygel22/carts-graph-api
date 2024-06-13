import { useQuery } from '@tanstack/react-query';
import { getAllCarts } from '../api/getAllCarts';
import { CartsResponse } from '../types/types';
import { Link, useNavigate } from 'react-router-dom';

export const SelectCart = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery<CartsResponse | undefined>({
    queryKey: ['carts'],
    queryFn: getAllCarts
  });

  const handleChange = (cartId: string | undefined) => {
    if (cartId) {
      navigate(`/${cartId}`);
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
      <select name="carts" onChange={(event) => handleChange(event.target.value)}>
        <option value="" disabled selected>
          Wybierz koszyk
        </option>
        {data.carts.map((cart) => (
          <option key={cart.id} value={cart.id}>{`Koszyk ${cart.id}`}</option>
        ))}
      </select>

      <Link to='/add'>Add a cart</Link>
    </>
  );
};
