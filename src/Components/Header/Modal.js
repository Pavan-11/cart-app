import React from "react";
import logo from "../../Utilities/freshcart-logo.svg";
const Modal = () => {
  return (
      <div
        className="modal fade container-fluid"
        id="sideBar"
        tabIndex="-1"
        aria-labelledby="sideBarLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable0 m-0">
          <div className="modal-content">
            <div className="modal-header">
              <img src={logo} alt="" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="d-flex flex-column">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Product"
                  aria-label="Search"
                />
                <button
                  className="btn btn-secondary d-flex justify-content-center mt-2"
                  type="Submit"
                >
                  <i className="bi bi-geo-alt pe-2"></i>Location
                </button>
              </form>

              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle navbar-toggle-button-li w-100 d-flex justify-content-center"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-grid pe-2"></i>
                    All Departments
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Dairy, Breads & Eggs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Snacks & unchies
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fruits & Vegetables
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cold drinks & Juices{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Breakfast & Instant Food
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bakery & Biscuits
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Chicken, Meat & Fish
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown me-2 ">
                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Dairy, Breads & Eggs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Snacks & unchies
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fruits & Vegetables
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cold drinks & Juices{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Breakfast & Instant Food
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bakery & Biscuits
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Chicken, Meat & Fish
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown me-2">
                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Dairy, Breads & Eggs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Snacks & unchies
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fruits & Vegetables
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cold drinks & Juices{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Breakfast & Instant Food
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bakery & Biscuits
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Chicken, Meat & Fish
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown me-2">
                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Stores <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Dairy, Breads & Eggs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Snacks & unchies
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fruits & Vegetables
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cold drinks & Juices{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Breakfast & Instant Food
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bakery & Biscuits
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Chicken, Meat & Fish
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown me-2">
                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mega menu <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Dairy, Breads & Eggs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Snacks & unchies
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fruits & Vegetables
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cold drinks & Juices{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Breakfast & Instant Food
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bakery & Biscuits
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Chicken, Meat & Fish
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown me-2">
                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Dairy, Breads & Eggs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Snacks & unchies
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fruits & Vegetables
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cold drinks & Juices{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Breakfast & Instant Food
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bakery & Biscuits
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Chicken, Meat & Fish
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown me-2">
                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Dairy, Breads & Eggs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Snacks & unchies
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fruits & Vegetables
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cold drinks & Juices{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Breakfast & Instant Food
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bakery & Biscuits
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Chicken, Meat & Fish
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown me-2">
                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dashboard <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Dairy, Breads & Eggs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Snacks & unchies
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fruits & Vegetables
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cold drinks & Juices{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Breakfast & Instant Food
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bakery & Biscuits
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Chicken, Meat & Fish
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown me-2">
                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Docs <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Modal;
