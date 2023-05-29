


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./design/navbarb.css";
import logo from "./image/logo.png";
import Calling from "./image/Calling.png";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><span><img alt="Healthy 24" src={logo}/> </span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link href="#visits">Our services</Nav.Link>
            <Nav.Link href="#contact">contact us</Nav.Link>
          </Nav>
          <div id="navbar-contact">
                <span>
                <img alt="Calling" src={Calling}/>  
                </span>
                <div>
                    <p>service disponible</p>
                    <h5>0453 628 125</h5>
                </div>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;