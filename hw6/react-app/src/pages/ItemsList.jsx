import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getItems } from "../services/itemsService";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import ErrorBox from "../components/ErrorBox";
import "./ItemsList.css";

export default function ItemsList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  useEffect(() => {
    setLoading(true);
    getItems(query)
      .then((data) => setItems(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  const handleSearch = (e) => {
    setSearchParams({ q: e.target.value });
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorBox message={error} />;

  return (
  <div className="container">
    <input
      type="text"
      placeholder="Search product..."
      value={query}
      onChange={handleSearch}
      className="search-input"
    />
    <ul className="card-list">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </ul>
  </div>
);

}
