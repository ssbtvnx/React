import { Link } from "react-router-dom";
import "./Card.css";

function Card({ item }) {
  return (
    <li className="card">
      <img src={item.thumbnail} alt={item.title} />
      <p>{item.title}</p>
      <Link to={`/items/${item.id}`}>Details</Link>
    </li>
  );
}

export default Card;
