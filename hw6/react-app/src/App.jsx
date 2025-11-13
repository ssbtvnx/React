import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import ItemsList from "./pages/ItemsList";
import ItemDetails from "./pages/ItemDetails";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<ItemsList />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
