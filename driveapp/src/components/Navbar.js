import React from "react";

export const Navbar = () => {
  return (
    <div>
      {/* <!--**************START HEADER AREA**************--> */}
      <header className="header-area local-header">
        <div className="container">
          <div className="row align-items-center">
            {/* <!-- logo  --> */}
            <div className="col-lg-2">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="https://verticreative.com/cc/assets/images/logo.png"
                    alt=""
                  />
                </a>
                <div className="mobile-bars mobi-menu-color">
                  <a href="#" className="mb-bars">
                    <i className="fas fa-bars"></i>
                  </a>
                  <a href="#" className="mb-time">
                    <i className="fas fa-times"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- menu --> */}
            <div className="col-lg-8">
              <div className="menu">
                <ul>
                  <a href="#" className="mobile-bars">
                    <i className="fas-fa-bars"></i>
                  </a>
                  <li>
                    <a href="https://verticreative.com/cc/index.html">Home</a>
                  </li>
                  <li>
                    <a href="https://verticreative.com/cc/about.html">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="https://verticreative.com/cc/member.html">
                      Members
                    </a>
                  </li>
                  <li>
                    <a href="https://verticreative.com/cc/download.html">
                      Downloads
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://verticreative.com/cc/photo.html"
                      className="active"
                    >
                      Photos
                    </a>
                  </li>
                  <li>
                    <a href="https://verticreative.com/cc/contact.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="header-btn">
                <a href="#">become a member</a>
              </div>
            </div>
          </div>
        </div>
        <div className="menu mbl-menu oth-mob">
          <ul>
            <a href="#" className="mobile-bars">
              <i className="fas-fa-bars"></i>
            </a>
            <li>
              <a href="https://verticreative.com/cc/index.html">Home</a>
            </li>
            <li>
              <a href="https://verticreative.com/cc/about.html">About us</a>
            </li>
            <li>
              <a href="https://verticreative.com/cc/member.html">Members</a>
            </li>
            <li>
              <a href="https://verticreative.com/cc/download.html">Downloads</a>
            </li>
            <li>
              <a
                href="https://verticreative.com/cc/photo.html"
                className="active"
              >
                Photos
              </a>
            </li>
            <li>
              <a href="https://verticreative.com/cc/contact.html">Contact Us</a>
            </li>
          </ul>
          <div className="header-btn2 mt-2">
            <a href="#">become a member</a>
          </div>
        </div>
      </header>
    </div>
  );
};
