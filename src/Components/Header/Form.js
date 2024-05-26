import React from "react";

const Form = () => {
  return (
    <div className="collapse navbar-collapse">
      <form className="d-flex w-75" role="search">
        <div className="input-group">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Products"
            aria-label="Search"
          />
          <span className="input-group-text">
            <i className="bi bi-search "></i>
          </span>
        </div>
        <button
          className="btn btn-outline-secondary d-flex text-dark"
          type="submit"
        >
          <i className="bi bi-geo-alt pe-2"></i>Location
        </button>
      </form>
    </div>
  );
};

export default Form;
