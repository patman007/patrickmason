import React from 'react';
//Import Links
import{ Link } from 'react-router-dom'


//Functional Component for Catering
const Catering = () => (
    <div className="catering">
        <h1>Contact Us</h1>
        <p>Do you need to place an online order? Fill out this 
           form and we'll get your order ready!< br /> 
           (Note: please do not use this form to complain about
           the quality of our food.)
        </p>
        <form>            
            <p>First Name:</p>
            <input type="text" placeholder="Jim" 
            name="fname" /><br />
            <p>Last Name:</p>
            <input type="text" placeholder="Davies" 
            name="lname" required />
            <br />            
            <p>Email:</p>
            <input type="email" placeholder="blah@email.com" 
            name="email" required />
            <br />
            <p>Phone number:</p>
            <input type="tel" placeholder="777-777-7777"
            name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
            title="Format 777-777-7777"required />
            <br /><br />                       
            <br />            
            <textarea rows="15" cols="40" 
                placeholder="What would you like to order?">
            </textarea>
            <p>Would you like a side of hash browns?</p>
            <input type="radio" checked />Yes
            <br />
            <input type="radio" />No
            <br />            
            <input type="submit" />            
      </form>
      <p>To go back to the home page, 
            click <Link to="/home">here</Link> 
      </p>
      <p>To see our menu, 
           click <Link to="/menu">here</Link>
      </p>
  </div>
)            

export default Catering;
