import { Http } from "./Https";
export const getProducts = (config) => Http.get("/products", config);
export const getCategories = () => Http.get("/categories");