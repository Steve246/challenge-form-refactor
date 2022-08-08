export const ProductService = () => {
  const addProduct = (newProduct) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (newProduct.id !== "") {
          resolve("Add Produc Success");
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
