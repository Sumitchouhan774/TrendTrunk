import React, { Suspense } from "react";
import ProductPage from "./ProductPage";

const ProductWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductPage />
    </Suspense>
  );
};

export default ProductWrapper;
