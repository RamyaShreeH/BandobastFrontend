import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import DataGridDemo1 from './DataGridDemo1';
function TableCard(){
    return(
        <div>
            <Card className='card'>
          <Card.Header className='card-header'>👤View User</Card.Header>
          <Card.Body className='card-body'>
            <Card.Text className='card-text'>
            {/* <Table striped bordered hover size="sm" >
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
            </Table> */}
            <DataGridDemo1/>


            </Card.Text>
          </Card.Body>
    </Card>
        </div>
    );
}
export default TableCard;