"use client";

import { useGetProductsQuery } from "../redux/api/productApi";


export default function Home() {
  const { data, isLoading, isError } = useGetProductsQuery({});
console.log(data)
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;
  if (!data?.length) return <p>No products found</p>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((product: any) => (
        <div key={product.id} className="border p-4">
          <img src={product.images[0]} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
