import React from "react";
import { Link } from "react-router-dom";

export default function Header({ back }) {
  return (
    <header className="header">
      <div className="width">
        {back && (
          <Link to="/#">
            <svg
              height="24px"
              width="24px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256" />
            </svg>

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                fill="currentColor"
                d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"
              />
            </svg> */}
          </Link>
        )}
        <h1>
          <Link to="/">Coiner!</Link>
        </h1>
      </div>
    </header>
  );
}
