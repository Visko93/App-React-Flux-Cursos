import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>Page not Found</h2>
      <p>
        <Link to="/" className="btn btn-success">
          Back to Home
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
