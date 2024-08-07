import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SlArrowDownCircle } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";

function NavScrollExample() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ marginLeft: "-13px" }}
    >
      <Container fluid>
        <Navbar.Brand style={{ fontWeight: "normal", fontSize: "1.7em" }}>
          Chat
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Button variant="outline-success" style={{ marginRight: "10px" }}>
              <SlPlus />
            </Button>
            <Button variant="outline-success">
              <SlArrowDownCircle />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
