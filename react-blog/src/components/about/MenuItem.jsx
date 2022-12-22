import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';







const MenuItem = (props) => {

     return (

          <Card className="d-flex flex-column" style={{ width: '18rem', margin: '20px' }}>
               <Card.Img variant="top" src={props.dish.image} />
               <Card.Body>
                    <Card.Title style={{ cursor: "pointer" }}>{props.dish.name}</Card.Title>
                    <Button variant="primary">Details</Button>








               </Card.Body>
          </Card>


     )
}

export default MenuItem;