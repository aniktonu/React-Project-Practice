import React, { useState } from 'react';
import DISHES from '../data/dishes';
import MenuItem from './MenuItem';



const Menu = () => {

    const [dishes, setDishes] = useState(DISHES);



    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>Menu page</h1>
                    {dishes.map(item => {
                        return (
                            <MenuItem dish={item}
                                key={item.id}
                                link={`/about/${item.id}`}
                            />
                        )
                    })
                    }

                </div>
            </div>
        </>
    )
}

export default Menu;

