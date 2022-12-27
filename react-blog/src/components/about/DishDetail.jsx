import { useParams, useNavigate } from "react-router-dom";
import DISHES from "../data/dishes";
import { useState } from "react";
import Card from 'react-bootstrap/Card';

const DishDetail = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [dishes, setDishes] = useState(DISHES);
    console.log(dishes);
    const dish = dishes.find(dish => dish.id === id);
    console.log('this is ', dish);




    return (
        <div>
            <h1>Dish Detail</h1>



        </div>
    )
}

export default DishDetail;
