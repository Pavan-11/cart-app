import React from "react";
import "../Header/Header.css";
import logo from "../../Utilities/freshcart-logo.svg";
import Form from "./Form";
import Modal from "./Modal";
import HeaderList from "./HeaderList";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex flex-column ">
        <div className="container pt-3">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>

          <Form />
          <Modal />

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row">
            <li className="nav-item">
              <h5>
                <a
                  className="nav-link pe-4"
                  aria-current="page"
                  href="/"
                >
                  <i className="bi bi-heart"></i>
                </a>
              </h5>
            </li>
            <li className="nav-item">
              <h5>
                <a className="nav-link pe-4" href="/">
                  <i className="bi bi-person"></i>
                </a>
              </h5>
            </li>
            <li className="nav-item">
              <h5>
                <a className="nav-link pe-4" href="/">
                  <i className="bi bi-cart"></i>
                </a>
              </h5>
            </li>
          </ul>

          <div>
            <button
              className="navbar-toggler navbar-toggler-small"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#sideBar"
              aria-controls="sideBar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <HeaderList />
      </nav>
      <hr />
    </>
  );
};

export default Header;
