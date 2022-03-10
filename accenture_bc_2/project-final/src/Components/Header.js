import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <Link className="nav-link" to={'/'}>
                        <img src="/Images/purrfect_bean4.png" className="img-fluid" style={{ width: '15rem' }} alt="tuna_logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to={'/articles'}>Articles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/chat'}>Chat</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/register'}>Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/aboutus'}>About us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header