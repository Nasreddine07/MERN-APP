import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";

const Spinnerr = () => {
    const isLoading = useSelector(state=> state.Product.isLoading)
  return (
    <div>
      {isLoading && <Spinner animation="border" variant="light" />}
    </div>
  );
};

export default Spinnerr;
