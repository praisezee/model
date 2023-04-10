import React from 'react'
import
{
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavLink,
  Offcanvas,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed='top' variant='dark' bg='transparent'>
      <Container fluid className='px-5'>
        <NavbarBrand >
          <Link to='/' className='nav-link d-flex'>
            <img src="/vite.svg" alt="" width='30' height='30' className='d-inline-block align-top' />
            <p className="d-none d-sm-block ms-1 h3 f-percifico">Witwater</p>
          </Link>
        </NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas className='bg-dark text-white' id="responsive-navbar-nav" placement='end'>
          <Offcanvas.Header closeButton closeVariant='white'>
            <Offcanvas.Title className='mx-auto fs-3 fw-bold text-capitalize'>
              Where will you like to go?
              <hr className="w-25 mx-auto my-1" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className='d-flex mx-auto text-center w-50'>
              <FormControl
                type='search'
                placeholder="Search"
                className="me-2"
                arial-label="search"
              />
              <Button variant='outline-warning'>Search</Button>
            </Form>
            <Nav className="ms-auto">
              <NavLink eventKey={1}>
                <Link className='nav-link text-capitalize text-center fs-6 fw-bold' to='/'>
                  Home
                </Link>
              </NavLink>
              <NavLink eventKey={2}>
                <Link className='nav-link text-capitalize text-center fs-6 fw-bold' to='about'>
                  About
                </Link>
              </NavLink>
              <NavLink eventKey={3}>
                <Link className='nav-link text-capitalize text-center fs-6 fw-bold' to='model'>
                  Login as Model
                </Link>
              </NavLink>
              <NavLink eventKey={4}>
                <Link className='nav-link text-capitalize text-center fs-6 fw-bold' to='client'>
                  login as client
                </Link>
              </NavLink>
            </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header;
