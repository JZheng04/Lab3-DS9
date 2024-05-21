import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarBS(){
    return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">LaunderLink</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Estadistica">Estadistica</Nav.Link>
            <Nav.Link href="/Historial">Historial</Nav.Link>
            <Nav.Link href="/Perfil">Perfil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBS;