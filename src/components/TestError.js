import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./TestError.css";

function TestError() {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error("Error boundary test");
  }

  return (
    <div className="error-test">
      <Helmet>
        <title>Test error boundary - Adelodun1</title>
      </Helmet>
      <button onClick={() => setError(true)}>Throw Error</button>
    </div>
  );
}

export default TestError;
