import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">Catland</Link>
                <div className="collape navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/article">Article</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to="/tags">Tags</Link>
                        </li>     
                    </ul>
                </div>
              </div>
              
          </nav>
        </div>
    )
}

export default Header;