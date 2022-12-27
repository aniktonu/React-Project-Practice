// import React, { useState } from 'react';
// import DATA from '../data/Data';
// import MenuItem from './MenuItem';
// import DishDetail from './DishDetail';




// const Menu = () => {

//     const [Data, setData] = useState(DATA);
//     const [selectedDish, setSelectedDish] = useState(null);


//     const onDishSelect = (dish) => {
//         this.setselectedDish({ selectedDish: dish });
//     }


//     const menu = Data.map(item => {
//         return (
//             <MenuItem
//                 dish={item}
//                 key={item.id}
//                 link={`/about/${item.id}`}



//             />
//         )
//     })



//     return (
//         <>
//             <div className="container">
//                 <div className="row">
//                     <h1>Menu page</h1>
//                     {menu}

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Menu;


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