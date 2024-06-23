import React from "react";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/productApi";
function Home() {
  let { data, isLoading, error, isError } = useGetProductsQuery();
  let Data = data?.data.products;
  return (
    <div>
      <Product data={Data} />
    </div>
  );
}

export default Home;
