import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, []);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}