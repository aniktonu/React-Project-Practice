import { useParams } from "react-router-dom";
import DISHES from "../data/dishes";

import Card from 'react-bootstrap/Card';


const DishDetail = () => {
    //const [dishes, setDishes] = useState(DISHES);
    const { id } = useParams();
    const dish = DISHES.filter(item => item.id === parseInt(id))[0];

    return (
        <>

            <div className="container">
                <div className="row">
                    <h1>Menu page</h1>
                    <Card className="d-flex flex-column" style={{ width: '18rem', margin: '20px' }}>
                        <Card.Img variant="top" src={dish.image} />
                        <Card.Body>
                            <Card.Title style={{ cursor: "pointer" }}>{dish.name}</Card.Title>
                            <Card.Text>
                                {dish.description}
                            </Card.Text>
                            <Card.Text>
                                {dish.price}
                            </Card.Text>
                            <Card.Text>
                                {dish.category}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}


export default DishDetail;
