const ProductService = () => {
  const addProduct = (newProduct) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (newProduct.id !== "") {
          resolve("Add Product Success");
        } else {
          reject(new Error("Oops...."));
        }
      }, 1500);
    });
  };
  return {
    addProduct,
  };
};

export default ProductService;
