import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import './Header.css'




const Header = () => {

    let activeStyle = {
        textDecoration: "underline",
        color: "red"
    };




    return (
        <>


            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="my-auto my-auto-inner"
                    >

                        <Nav.Link as={NavLink} style={({ isActive }) => isActive ? activeStyle : undefined
                        } to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} style={({ isActive }) => isActive ? activeStyle : undefined
                        } to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} style={({ isActive }) => isActive ? activeStyle : undefined
                        } to="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default Header;