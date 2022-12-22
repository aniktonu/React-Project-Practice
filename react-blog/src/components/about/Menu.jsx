import React, { useState } from 'react';
import DISHES from '../data/dishes';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';




const Menu = () => {

    const [dishes, setDishes] = useState(DISHES);

    const menu = dishes.map(item => {
        return (
            <MenuItem dish={item} key={item.id} />
        )
    })



    return (
        <>
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        </>
    )
}

export default Menu;
