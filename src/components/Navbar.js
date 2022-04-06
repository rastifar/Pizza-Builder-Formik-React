import React from "react";
import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <Nav activeKey="/home" style={{ background: "#0d6efd" }}>
      <Nav.Item>
        <Nav.Link href="/home" style={{ color: "#ffff" }}>
          Pizza builder Form
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
