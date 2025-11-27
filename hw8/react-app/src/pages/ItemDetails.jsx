import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchItemById } from "../features/items/itemsSlice";
import Spinner from "../components/Spinner";
import ErrorBox from "../components/ErrorBox";
import "./ItemDetails.css";

export default function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    selectedItem: item,
    loadingItem,
    errorItem,
  } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItemById(id));
  }, [id, dispatch]);

  if (loadingItem) return <Spinner />;
  if (errorItem) return <ErrorBox message={errorItem} />;
  if (!item) return <ErrorBox message="Item not found" />;

  return (
    <div className="details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>

      <h2>{item.title}</h2>

      <img className="details-image" src={item.thumbnail} alt={item.title} />

      <div className="details-info">
        <p>{item.description}</p>
        <p><strong>Category:</strong> {item.category}</p>
        <p><strong>Brand:</strong> {item.brand}</p>
        <p><strong>Price:</strong> ${item.price}</p>
        <p><strong>Rating:</strong> {item.rating}</p>
        <p><strong>Stock:</strong> {item.stock}</p>
      </div>
    </div>
  );
}
