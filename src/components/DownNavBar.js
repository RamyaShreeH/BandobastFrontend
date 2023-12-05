import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../App.css';
const DownNavBar = () => {
    return(
        <Navbar className='nav-down'>
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav>
            <Nav.Link href="/home"><span className='menus'>Home{'>>'}</span></Nav.Link>
            <Nav.Link href="/user"><span className='menus'>User{'>>'}</span></Nav.Link>
            <Nav.Link href="/add"><span className='menus'>Add{'>>'}</span></Nav.Link>
            {/* <ul>
                <Nav.Link href="/home"><span className='menus'>Home{'>>'}</span></Nav.Link>
                <Nav.Link href="/user"><span className='menus'>User{'>>'}</span></Nav.Link>
                <Nav.Link href="/add"><span className='menus'>Add{'>>'}</span></Nav.Link>
            </ul> */}
          </Nav>
        </Container>
        </Navbar>
    );
}
export default DownNavBar;
