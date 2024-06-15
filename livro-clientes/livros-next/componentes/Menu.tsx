import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" passHref className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroLista" passHref className="nav-link">
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados" passHref className="nav-link">
                Novo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
