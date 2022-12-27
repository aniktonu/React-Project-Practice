// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useNavigate } from 'react-router-dom';








// const MenuItem = (props) => {
//      // const navigate = useNavigate();
//      // const navigateToDish = () => {
//      //      navigate('/about/:id')
//      // };



//      return (

//           <Card className="d-flex flex-column" style={{ width: '18rem', margin: '20px' }}>
//                <Card.Img variant="top" src={props.dish.image} />
//                <Card.Body>
//                     <Card.Title style={{ cursor: "pointer" }}>{props.dish.name}</Card.Title>
//                     <Button variant="primary" onClick={props.link}>click</Button>


//                </Card.Body>




//           </Card >


//      )
// }

//export default MenuItem;


import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const MenuItem = (props) => {

     const navigate = useNavigate();

     return (

          <Card className="d-flex flex-column" style={{ width: '18rem', margin: '20px' }}>
               <Card.Img variant="top" src={props.dish.image} />

               <Card.Body>
                    <Card.Title style={{ cursor: "pointer" }}>{props.dish.name}</Card.Title>
                    <Card.Link as={Link} to={props.link} className="btn btn-primary" onClick={() => navigate(`/about/${props.id}`)} >Details</Card.Link>
               </Card.Body>


          </Card >




     )
}

export default MenuItem;