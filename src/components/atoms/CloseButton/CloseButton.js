import React, { useContext } from "react";
import { Nav } from "../../../providers/NavContext";

const CloseButton = () => {
  const { state, handleNavClick } = useContext(Nav);

  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        handleNavClick(state);
      }}
    >
      <path
        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
        fill="#69707D"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default CloseButton;