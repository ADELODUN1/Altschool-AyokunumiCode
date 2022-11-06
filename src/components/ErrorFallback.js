import React from "react";
import { Helmet } from "react-helmet";
import "./ErrorFallback.css";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-fallback">
      <Helmet>
        <title>Error - Adelodun1</title>
      </Helmet>
      <div>
        <div className="error-name"> {error.name} </div>
        <div className="error-message"> {error.message} </div>
        <button onClick={resetErrorBoundary}> Try again </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
