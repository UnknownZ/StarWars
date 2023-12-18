import React from 'react';
import { Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                View favorites
                            </button>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/characters">Characters</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/planets">Planets</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/starships">Starships</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar