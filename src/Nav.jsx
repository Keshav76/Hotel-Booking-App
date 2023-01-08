import React from "react";

function Navbar() {
  return (
    <>
      <nav
        className="navbar bg-body-tertiary"
        style={{
          height: "10vh",
          overflow: "hidden",
        }}
      >
        <div className="container-fluid">
          <div
            className="navbar-brand"
            style={{
              fontWeight: "900",
              background:
                "linear-gradient(to left, #a104ad, #0b2be0, #329941, #f7f658, #f16412, #e92153, #aa04a7)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              fontFamily: "Tangerine",
              fontSize: "2pc",
              letterSpacing: 2,
              padding: 0,
              // marginLeft: "1pc"
            }}
          >
            Sample Logo
          </div>
          <div className="d-flex">Need Help? Call: 9876543210</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
