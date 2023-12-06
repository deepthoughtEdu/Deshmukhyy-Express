import React from "react";

export default function Footer() {
  return (
    <footer className="container-fluid text-center">
      <a href="#home" title="To Top">
        <span className="glyphicon glyphicon-chevron-up"></span>
      </a>
      <p>
      © Copyright {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </footer>
  );
}
