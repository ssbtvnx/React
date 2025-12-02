import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  fetchItems,
  setQuery,
} from "../features/items/itemsSlice";

import Card from "../components/Card";
import Spinner from "../components/Spinner";
import ErrorBox from "../components/ErrorBox";
import "./ItemsList.css";

export default function ItemsList() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const {
    list,
    loadingList,
    errorList,
  } = useSelector((state) => state.items);

  // fetch list on query change
  useEffect(() => {
    dispatch(fetchItems(query));
    dispatch(setQuery(query));
  }, [query, dispatch]);

  // search handler
  const handleSearch = (e) => {
    setSearchParams({ q: e.target.value });
  };

  if (loadingList) return <Spinner />;
  if (errorList) return <ErrorBox message={errorList} />;

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
        {list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
