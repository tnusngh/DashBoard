import { Link } from "react-router-dom";

let Nav = () => {
  return (
    <aside>
      <h2>
        <i class="fa-solid fa-record-vinyl"></i>Dashboard
      </h2>
      <div className="nav">
        <div className="activenav">
          <Link to="/">
            <i class="fa-solid fa-house"></i>Dashboard
          </Link>
        </div>
        <Link to="/product">
          <i className="fa-solid fa-box"></i>Product
        </Link>
        <Link to="customers">
          <i className="fa-solid fa-users"></i>Customers
        </Link>
        <Link to="/income">
          <i className="fa-solid fa-coins"></i>Income
        </Link>
        <Link to="/promote">
          <i className="fa-solid fa-rectangle-ad"></i>Promote
        </Link>
        <Link to="/help">
          <i className="fa-solid fa-circle-info"></i>Help
        </Link>
      </div>
    </aside>
  );
};
export default Nav;
