import React from "react";
import { Button as BS } from "react-bootstrap";

function Button({ props, disabled, className, onClick, children, theme }) {
  const themeStyle = (t) => {
    return {
      1: "cst-btn-1",
      2: "cst-btn-2",
    }[t];
  };

  return (
    <BS
      type="submit"
      variant="none"
      onClick={onClick}
      disabled={disabled}
      className={`${themeStyle(theme ?? 1)} ${className}`}
    >
      <span className="cst-btn-1-text">{children}</span>
    </BS>
  );
}

export default Button;
