import { ProductService } from "./ProductService";

export const ServiceFactory = () => {
  return {
    productService: ProductService,
  };
};
