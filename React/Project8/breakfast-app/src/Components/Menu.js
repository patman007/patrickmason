import React from 'react';
import { Link } from 'react-router-dom';

//Import the 4 Breackfast Images
//For images to be dynamic you must put the images folder 
//inside src folder.
//For images to be hard coded in you must put the images folder
//inside public folder.
import Breakfast1 from '../assets/image/breakfast1.jpg';
import Breakfast2 from '../assets/image/breakfast2.jpg';
import Breakfast3 from '../assets/image/breakfast3.jpg';
import Breakfast4 from '../assets/image/breakfast4.jpg';


//Functional Component for Menu
const Menu = () => (
    <div className="menu">
        <h1>The Menu</h1>
            <h3>The Ultimate Breakfast</h3>
            <img width="300" height="300" 
            src={Breakfast1} alt="ultimate" />
            <p>Are you hungry? I am <em>really</em> hungry? If so, 
                we recommend you pick this dish! Fluffy pancakes, eggs, 
                over easy, crispy bacon, refried beans, a heapin 
                mountain of fried potatoes, and an omlete with green 
                and red bell peppers. Come with a side of tomato and 
                avocado (bleh).
            </p>
            <h3>Bacon and Eggs</h3>
            <img width="300" height="300" 
            src={Breakfast2} alt="bacon-and-eggs" />
            <p>You can't go wrong with the classics. Two eggs served 
                over easy and two slices of crispy bacon. 
            </p>
            <h3>Plan and simple Eggs</h3>
            <img width="300" height="300" 
            src={Breakfast3} alt="eggs" />
            <p>Looking for something filled with protein? Two eggs, 
                served any way you like.
            </p>
            <h3>The Pancake Feast</h3>
            <img width="300" height="300" 
            src= {Breakfast4} alt="pancake"/>
            <p>Talk about a carb overload! Seven stacks of mini 
                pancakes shaped like hearts. Come with a side of 
                maple syrup and butter. 
            </p>
            <p>
            To go back to the home page, 
            click <Link to="/home">here</Link> 
            </p>
            <p>
            Are you interested in catering or ordering to go? 
            If so, click <Link to="/catering">here</Link>
            </p>
    </div>
)            

export default Menu