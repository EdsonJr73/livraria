import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                Catálogo
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/dados" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/dados">
                Novo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
