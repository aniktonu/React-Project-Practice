
import React from 'react';
import HomepageImage from './homepage.jpg';
import Image from 'react-bootstrap/Image';


const HomePage = () => {
    return (
        <>
            <div className='container col-lg-12 mx-auto'>
                <Image src={HomepageImage} className="img-fluid" />
            </div>
        </>

    )
}

export default HomePage;


