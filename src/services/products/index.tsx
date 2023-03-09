import {
  useQuery,
} from "react-query";
import axios from "axios";
import { IData } from "@/pages/api/products";

export const useProducts = () => {
    return useQuery("products", async () => {
      const { data } = await axios.get<IData>(
        "http://localhost:3000/api/products"
      );
      return data;
    });
  }