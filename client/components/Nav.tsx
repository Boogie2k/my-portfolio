import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "../styles/Nav.module.css"

function Navs() {
  return (
    <Navbar className= {`${styles.nav} sticky-top`}   color="light" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className='col-8' style={{color:'white'}} href="#home">Oghosa Benjamin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color:'white'}} href="#about"  data-to-scrollspy-id="about">About me</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#projects"  data-to-scrollspy-id="projects">Projects</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#contact"  data-to-scrollspy-id="contact">contact</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs