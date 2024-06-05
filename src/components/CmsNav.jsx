import { Container, Nav, NavDropdown, NavItem, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { useSelector } from "react-redux"


export const CmsNav = () => {
    const user = useSelector(state => state.user.value)


    return user &&  <Navbar bg ="dark" expand="lg" data-bs-theme="dark">
    <Container>
        <Link to="/" className="navbar-brand">React 110</Link>
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Nav>
                <Nav.Item>
                    <NavLink to ="" className="nav-link">Link</NavLink>
                </Nav.Item>
            </Nav>
            <Nav className="ms-auto mb-3 mb-lg-0">
                <NavDropdown aligh="end" title ="Profile">
                    <Link to ="" className="dropdown-item">Name</Link>
                </NavDropdown>
    
            </Nav>
        </Navbar.Collapse>
    </Container>
    
            </Navbar>
}