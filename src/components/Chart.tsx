import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Chart = ({ data }) => {

  const chartData = data.products.map((product, index) => ({
    name: `Produkt ${index + 1}`,
    price: product.price,
    discountedPrice: (product.price * (100 - product.discountPercentage) / 100).toFixed(2),
  }));

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 10,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="linear" dataKey="discountedPrice" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
