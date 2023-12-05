import Header from './components/Header';
import DownNavBar from './components/DownNavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const App = () => {
  return (
    <div>
      <Header />
      <DownNavBar/>
      {/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    

      <Card className='card'>
          <Card.Header className='card-header'>+ Add User Details</Card.Header>
          <Card.Body className='card-body'>
            <Card.Text className='card-text'>
              <div className="dInput" >
                <div>
                  <label htmlFor="name">Police Station Name</label>
                  <input type="text" id="name"/>
                </div>
                <div>
                  <label htmlFor="name">Username</label>
                  <input type="text" id="name"/>
                </div>
                <div>
                  <label htmlFor="name">Password</label>
                  <input type="text" id="name"/></div>
              </div>

              <div className="dInput">
                <div>
                  <label htmlFor="name">Contact No.</label>
                  <input type="text" id="name"/>
                </div>
                <div>
                  <label htmlFor="name">Mobile No.</label>
                  <input type="text" id="name"/>
                </div>
                <div>
                  <label htmlFor="name">Email Address</label>
                  <input type="text" id="name"/>
                </div>
              </div>
            </Card.Text>
              <Button  variant="primary">Add</Button>{' '}
              {/* <button className='btn btn-primary'> aaa</button> */}
              <Button  variant="primary">Clear</Button>{' '}
          </Card.Body>
    </Card>
    <Card className='card'>
          <Card.Header className='card-header'>👤View User</Card.Header>
          <Card.Body className='card-body'>
            <Card.Text className='card-text'>
            <Table striped bordered hover size="sm" >
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Police Station Name</th> 
                  <th>District</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Contact No.</th>
                  <th>Mobile No.</th>
                  <th>Email Address</th>
                  <th>Is Admin?</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  
                </tr>
                <tr>
                  <td>3</td>
                  <td >Larry the Bird</td>
                  <td>@twitter</td>
                  <td >Larry the Bird</td>
                  <td >Larry the Bird</td>
                  <td >Larry the Bird</td>
                  <td >Larry the Bird</td>
                  <td >Larry the Bird</td>
                  <td >Larry the Bird</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>

{/* <Table responsive = "sm">
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 122 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 122 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 122 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 122 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table> */}
            </Card.Text>
          </Card.Body>
    </Card>
  </div>
  );
};

export default App;