import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 style={{ color: '#fff' }}>My Product Store</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;