import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expan d="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">Dev noob</Navbar.Brand> */}
        <NavLink className="nav-link navbar-brand" to="/">
          Dev noob
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/users">
              Users
            </NavLink>
            <NavLink className="nav-link" to="/admins">
              Admin
            </NavLink>
          </Nav>
          <Nav>
            <button className="btn-login">Log in</button>
            <button className="btn-signup">Sign Up</button>
            {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item>Log-in</NavDropdown.Item>
              <NavDropdown.Item>Log-out</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
