import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'

function HomeNavbar() {
    return (
        <div >
            <Navbar bg="light" expand="lg" style={{ marginTop: '10px' }}>
                <Container style={{ display: 'flex' }}>
                    <Navbar.Brand style={{ color: 'black', fontSize: '2rem', fontWeight: 'bold' }} >FaceIT</Navbar.Brand>
                    <Nav className="me-auto">
                    <Button variant="light" style={{fontSize:'2rem'}}>Contact</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default HomeNavbar