import React, { Component } from 'react';
import './App.css';

//P tag Text Component
class Text extends Component {
  render() {
    return (
    <div className="Text">        
        <p>
          <br></br>
            Hi there everyone! My name is <u>Jon Arbuckle</u>. 
            I am 30 years old and I am a cartoonist that lives
            in Munice, Indiana. I am the proud owner of a cate named  
            <strong>Garfield</strong> and a dog named <strong>Odie</strong>. 
            Garfield is a fat, lazy, and loves to eat, while Odie is a dog
            without a brain. Although my pets drive me <em>crazy</em>,
             I can't imagine life without them.
        </p>

        <p>
           I spend about half my time going to the grocery store to buy 
           enough food to feed Garfield. I have to make sure to buy all 
           of Garfield's favorite foods, or else he'll get grumpy. This
           includes milk, cheese, bread, ham, chicken wings, potato chips,
           past with marinara sauce, frozen pizzas, and <strong>lots and 
           lots</strong> of lasangna. When I come home, Garfield usually 
           attacks me and tries to eat everything in the grocery bag before 
           I even have time to put it in the refrigerator. One time he ate 
           everything that I bought in 30 seconds, and I had to go back to 
           the store to buy more food.<em> I wasn't happy about that</em>.  
        </p>
        <br></br>      
        <hr></hr>        
      </div>
    );
  }
}

//Exporting p tag text Component
export {Text};