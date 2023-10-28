import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Customers from "./Customers";
import Income from "./Income";
import Promote from "./Promote";
import Help from "./Help";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
