import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DishDetail from './DishDetail';







const MenuItem = (props) => {
     const navigate = useNavigate();

     const navigateToDetail = () => {

          navigate('./details');
     };


     return (

          <Card className="d-flex flex-column" style={{ width: '18rem', margin: '20px' }}>
               <Card.Img variant="top" src={props.dish.image} />
               <Card.Body>
                    <Card.Title style={{ cursor: "pointer" }}>{props.dish.name}</Card.Title>
                    <Button variant="primary" onClick={navigateToDetail}>Click</Button>
                    <Routes>
                         <Route path="/details" element={<DishDetail />} />
                    </Routes>
               </Card.Body>




          </Card>


     )
}

export default MenuItem;