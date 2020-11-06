import React from 'react';
//Import Links
import{ Link } from 'react-router-dom'


//Functional Component for Home
const Home = () => (
        <div className="home">
            <h1>The Breakfast Restaurant</h1>
            <img src='../assets/image/food.jpg'
                alt="food" width="500" height="400" />
                <h2>We serve the most delicous breakfast 
                    you will ever find!
                </h2>
                <p>Established in 2002,The Breakfast Restaurant is a 
                    contemporary cafe that appeals even to pickiest 
                    of eaters (that means you!) Whether you wants eggs,
                    benedict, sausage, bacon, cereal or just a regular 
                    cup of coffee, we've got all.
                </p>
                <p>We are passionate about excellence, and we have a 
                    desire to serve you with consistent quality that 
                    you won't find anywhere else.
                </p>
                <p>We want you to feel at home. You can expect to feel 
                    a level of comfort and warmth from our nicely 
                    decorated dining area. We have comfortable chairs, 
                    old fashioned wooden tables and other wonderful 
                    aspects that are simply unmatched anywhere else. 
                    We even have a patio area for our guests who need 
                    a little sunshine in their lives.
                </p>
                <p>To see our menu, 
                click <Link to="/menu">here</Link>
                </p>
                <p>Are you interested in catering or ordering to go? 
                If so, click <Link to='/catering'>here</Link>
                </p>
        </div>
    );

export default Home