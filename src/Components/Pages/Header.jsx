import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Header.css';



function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         
        <Navbar.Brand href="#home">Keshavapatteri M</Navbar.Brand>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
   
<Nav.Link as={Link} to={"/contact"} >Contact</Nav.Link>
<Nav.Link as={Link} to={'/profile'}>Profile</Nav.Link>
<Nav.Link as={Link} to={'/about'}>About</Nav.Link>
<Nav.Link as={Link} to={'/services'}>Services</Nav.Link>

          </Nav>
   

        </Container>
      </Navbar>
      <br />
     
      
    </>
  );
}

export default Header;