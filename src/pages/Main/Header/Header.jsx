import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">HOME</Link>
    </header>
  );
};

export { Header };
