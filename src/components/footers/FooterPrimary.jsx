import React from "react";
import { Link } from "react-router-dom";

const FooterPrimary = () => {
  // const location = useLocation();

  // const hideFooterPrimary = location.pathname === '/project';

  // if (hideFooterPrimary) {
  //   return null;
  // }

  return (
    <footer
      id="footer"
      className="bg-dark text-white-50 h-100 py-5 d-flex flex-column justify-content-center"
    >
      <div className="footer-content">
        <div className="container">
          <div className="row gy-3">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="widget">
                <div className="text-white fw-500 mb-4 text-uppercase">
                  STUDIO
                </div>
                <p className="mb-5">
                  We hope to empower creatives and brands <br />
                  across the ecosystem to create and use these <br />
                  digital assets to transform the way we appreciate <br />
                  fashion in the metaverse.
                  <br />
                  <br />
                  All rights reserved. Copyright © 2022.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <div className="row gy-3">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="widget">
                    <div className="text-white fw-500 mb-4 text-uppercase">
                      Discover
                    </div>
                    <ul className="nav flex-column gap-2 small">
                      <li>
                        <Link to>Features</Link>
                      </li>
                      <li>
                        <Link to>Layouts</Link>
                      </li>
                      <li>
                        <Link to>Corporate</Link>
                      </li>
                      <li>
                        <Link to>Updates</Link>
                      </li>
                      <li>
                        <Link to>Pricing</Link>
                      </li>
                      <li>
                        <Link to>Customers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="widget">
                    <div className="text-white fw-500 mb-4 text-uppercase">
                      Features
                    </div>
                    <ul className="nav flex-column gap-2 small">
                      <li>
                        <Link to>Layouts</Link>
                      </li>
                      <li>
                        <Link to>Headers</Link>
                      </li>
                      <li>
                        <Link to>Widgets</Link>
                      </li>
                      <li>
                        <Link to>Footers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="widget">
                    <div className="text-white fw-500 mb-4 text-uppercase">
                      Pages
                    </div>
                    <ul className="nav flex-column gap-2 small">
                      <li>
                        <Link to>Portfolio</Link>
                      </li>
                      <li>
                        <Link to>Blog</Link>
                      </li>
                      <li>
                        <Link to>Shop</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="widget">
                    <div className="text-white fw-500 mb-4 text-uppercase">
                      Support
                    </div>
                    <ul className="nav flex-column gap-2 small">
                      <li>
                        <Link to>Help Desk</Link>
                      </li>
                      <li>
                        <Link to>Documentation</Link>
                      </li>
                      <li>
                        <Link to>Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-content">
        <div className="container">
          <div className="mt-5">
            <div className="copyright-text text-center text-white text-opacity-25 small">
              {" "}
              © 2022 MIRIMAD - All Rights Reserved.{" "}
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50"
              >
                ITWALY
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPrimary;
