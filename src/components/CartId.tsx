import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getCartById } from '../api/getCartById';
import { Chart } from './Chart';
import { useState } from 'react';
import { deleteCartById } from '../api/deleteCartById';

export const CartId = () => {
  const params = useParams();
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  const [showChart, setShowChart] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ['cartId', params.id],
    queryFn: () => getCartById(params.id)
  });

  const mutation = useMutation({
    mutationFn: async (cartId: string) => {
      return await deleteCartById(cartId);
    },
    onSuccess: (deletedCart) => {
      console.log(`Cart deleted: ${params.id}`, deletedCart);
      queryClient.invalidateQueries({ queryKey: ["carts"] });
      navigate("/");
    },
    onError: () => {
      console.log("Something went wrong");
    }
  });

  const handleDelete = () => {
    mutation.mutate(params.id);
  };

  const handleShowChart = () => {
    setShowChart(!showChart);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  if (!data) {
    return <p>No data...</p>;
  }

  return (
    <div>
      <h2>Produkty Koszyka {data.id}</h2>
      <ul>
        {data.products.map(product => (
          <li key={product.id}>
            {product.title} - <b>Cena:</b> {product.price}, <b>Cena po rabacie:</b> {(product.price * (100 - product.discountPercentage)).toFixed(2)} PLN
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/')}>Back</button>
      <button onClick={handleShowChart}>
        {showChart ? 'Hide Graph' : 'Show Graph'}
      </button>
      <button onClick={handleDelete}>Delete cart</button>
      {showChart && <Chart data={data} />}
    </div>
  );
};
