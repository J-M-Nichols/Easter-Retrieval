import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavigationBar = _ => {
    return (
        <Navbar
            className="fixed-top border-bottom border-info rounded-bottom ps-3 pe-3 gap-3"
            bg='light'
            expand='lg'
            role='navigation'
            aria-label='Main Navigation'
        >
            <Navbar.Brand 
                className="p-0 d-flex"
                as={Link}
                to='/'
            >
                <img 
                    className="img-fluid m-auto"
                    src={`${process.env.PUBLIC_URL}/ChesterCarrotsLogo.png`}
                    alt="Chester Carrots"
                />
                <span 
                    className="ps-3"
                >Easter Retrieval</span>
            </Navbar.Brand>
            <Navbar.Toggle 
                aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse 
                className="justify-content-end"
                id="basic-navbar-nav"
            >
                <Nav 
                    className='mr-auto d-flex gap-3'
                >
                    <Nav.Link 
                        as={Link}
                        to='/'
                        className="badge border border-info rounded text-info p-3 shadow-none"
                    >Home</Nav.Link>
                    <Nav.Link 
                        as={Link}
                        to='/play'
                        className="badge border border-info rounded text-info p-3 shadow-none"
                    >Play</Nav.Link>
                    <Nav.Link 
                        as={Link}
                        to='/about-me'
                        className="badge border border-info rounded text-info p-3 shadow-none"
                    >About Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar