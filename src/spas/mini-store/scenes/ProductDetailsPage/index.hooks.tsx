import { useParams } from "react-router";

export const useProductDetailsPage = () => {
  const { id } = useParams();
  return { id };
};
