import React from 'react';
//Ninjas.js is the child component
import './Ninjas.css'

//Function Component
//we invoking and calling ninjas and
//deleteNinja in the function
const Ninjas = ({ninjas, deleteNinja}) => {
    // console.log(this.props);
    //We could put props on Line 5 instead
    //of {ninjas} for less destructuring and 
    //maintain Line 11. 

    //Destructuring
    // const {name, age, belt} =  this.props;
    // const { ninjas } = this.props;
    // const { ninjas } = props;
    
    // map function array list to a new array
    const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 20 ) {
        return (
            //Below is doing dynamic properties
            //Use the key referring to the id numbers
            //given in App.js
            <div className='ninja' key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>                
            </div>
        ) //The onClick needs to have an anonymous arrow function here to make sure the 
        // the onClick event only happens when the button is clicked and it looks for an id
        
    }   else {
        return null
    }        
})



return (
    <div className='ninja-list'>
        {ninjaList}
    </div>
)
//Ternary Opertator ? means IF and : means ELSE
    // const ninjaList = ninja.map(ninja => {
    //     return ninja.age > 20 ? (
    //         <div className='ninja' key={ninja.id}>
    //             <div>Name: {ninja.name}</div>
    //             <div>Age: {ninja.age}</div>
    //             <div>Belt: {ninja.belt}</div>
    //         </div>
    //     ) : null;        
    // });


        // return (
        //     //Below is doing dynamic properties
        //     <div className='ninja-list'>
        //         {
        //             ninjas.map(ninja => {
        //                 return ninja.age > 20 ? (
        //                     <div className='ninja' key={ninja.id}>
        //                         <div>Name: {ninja.name}</div>
        //                         <div>Age: {ninja.age}</div>
        //                         <div>Belt: {ninja.belt}</div>
        //                     </div>
        //                 ) : null;
        //             })
        //         }
        //     </div>
        // )
}

export default Ninjas