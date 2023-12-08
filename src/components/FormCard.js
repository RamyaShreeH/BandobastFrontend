import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from './Form';
function FormCard(){
    return(
        <div>
        <Card className='card'>
          <Card.Header className='card-header'>+ Add User Details</Card.Header>
          <Card.Body className='card-body'>
            <Card.Text className='card-text'>
              {/* <div className="dInput" >
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
              </div> */}
              <Form/>
            </Card.Text>
              <Button  variant="primary">Add</Button>{' '}
              {/* <button className='btn btn-primary'> aaa</button> */}
              <Button  variant="primary">Clear</Button>{' '}
          </Card.Body>
    </Card>
    </div>
    );
}

export default FormCard;
