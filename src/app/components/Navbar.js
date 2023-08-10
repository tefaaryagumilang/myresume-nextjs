import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg bg-black text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <Link
                        className="navbar-brand"
                        href="/"
                    >
                        My Resume
                    </Link>
                    <button
                        className="navbar-toggler text-uppercase font-weight-bold bg-light text-black rounded"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menu
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-md-1">
                                <Link className="nav-link py-3 px-0 px-md-3 rounded" href="/">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item mx-0 mx-md-1">
                                <Link className="nav-link py-3 px-0 px-md-3 rounded" href="/skill">
                                    Skill
                                </Link>
                            </li>
                            <li className="nav-item mx-0 mx-md-1">
                                <Link className="nav-link py-3 px-0 px-md-3 rounded" href="/experience">
                                    Experience
                                </Link>
                            </li>
                            <li className="nav-item mx-0 mx-md-1">
                                <Link className="nav-link py-3 px-0 px-md-3 rounded" href="/education">
                                    Education
                                </Link>
                            </li>
                            <li className="nav-item mx-0 mx-md-1">
                                <Link className="nav-link py-3 px-0 px-md-3 rounded" href="/training">
                                    Training &amp; Certification
                                </Link>
                            </li>
                            <li className="nav-item mx-0 mx-md-1">
                                <Link className="nav-link py-3 px-0 px-md-3 rounded" href="/portfolio">
                                    Portfolio &amp; Showcase
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navigation */}
        </>
    );
}
