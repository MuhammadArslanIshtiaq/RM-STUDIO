import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavbarPrimary = () => {
  const [show, setShow] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const hideNavbarPrimary = location.pathname === "/add-website";

  if (hideNavbarPrimary) {
    return null;
  }

  const changeBackground = () => {
    if (window.scrollY >= 180) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
  ];

  return (
    <>
      {/* Desktop */}
      <header
        className={`${navbar ? "sticky-top bg-clear" : "sticky-top bg-clear"}`}
      >
        <nav className="py-2">
          <div className="px-4">
            <div className="d-flex align-items-center">
              <div className="me-auto d-flex align-items-center">
                <Link to="/" className="d-flex align-items-center logo">
                  <span class={`logo-dark display-6 fw-bold text-black`}>
                    STUDIO
                  </span>
                </Link>
              </div>

              <div className="nav-links">
                <ul className="nav align-items-center gap-1 gap-sm-4">
                  {links.map((item) => (
                    <li>
                      <NavLink
                        to={item.link}
                        className={`link text-capitalize d-none d-xl-inline-block`}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <a
                      href
                      type="button"
                      onClick={handleShow}
                      className="link icon-size-small d-xl-none"
                    >
                      <i className="fa fa-bars" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile */}

      <aside className={`sidebar ${show ? "show" : "hide"}`}>
        <div className="d-flex h-100">
          <div className="px-0 col-9 col-md-5 col-lg-4">
            <div className="offcanvas-header bg-white w-100">
              <div className="d-flex align-items-center w-100 justify-content-between">
                <Link to="/" className="logo d-flex align-items-center">
                  <span class={`logo-dark display-6 fw-bold text-black`}>
                    STUDIO
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn-close"
                />
              </div>
            </div>
            <div className="offcanvas-body h-100 bg-white">
              <div className="nav-links">
                <ul className="nav flex-column gap-3 ps-2">
                  {links.map((item) => (
                    <li>
                      <NavLink
                        to={item.link}
                        className={`link text-capitalize d-inline-block`}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="flex-fill bg-white bg-opacity-50"
            onClick={handleClose}
          />
        </div>
      </aside>
    </>
  );
};

export default NavbarPrimary;
