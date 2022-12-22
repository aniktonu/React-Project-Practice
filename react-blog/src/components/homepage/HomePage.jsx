
import React from 'react';
import HomepageImage from './homepage.jpg';
import Image from 'react-bootstrap/Image';


const HomePage = () => {
    return (
        <>
            <div className='container row'>
                <Image src={HomepageImage} className="img-fluid" />
            </div>
        </>

    )
}

export default HomePage;


