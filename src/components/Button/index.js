import React from "react";
import { Button as BS } from "react-bootstrap";
// import './index.scss'

function Button({ props, className, onClick, children }) {
  return (
    <BS type="submit" variant="none" onClick={onClick} className="cst-btn-1">
      <span className="cst-btn-1-text">{children}</span>
    </BS>
  );
}

export default Button;
