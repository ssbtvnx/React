import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById } from "../services/itemsService";
import Spinner from "../components/Spinner";
import ErrorBox from "../components/ErrorBox";
import "./ItemDetails.css";


export default function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getItemById(id)
      .then((data) => setItem(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <ErrorBox message={error} />;
  if (!item) return <ErrorBox message="Item not found" />;

  return (
    <div style={{ padding: "20px" }}>
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h2>{item.title}</h2>
      <img src={item.thumbnail} alt={item.title} style={{ width: "300px" }} />
      <p>{item.description}</p>
      <p>Category: {item.category}</p>
      <p>Brand: {item.brand}</p>
      <p>Price: ${item.price}</p>
      <p>Rating: {item.rating}</p>
      <p>Stock: {item.stock}</p>
    </div>
  );
}
