//Import React and the useState component
//to use inside the Function Component
import React, {useState} from 'react';
//Import Axios
import axios from 'axios';
import './App.css';
//Import Form components

import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

// Assigns the baseUrl as port 3001 if development otherwise, use the public url
// used to start react, usually 3000
const baseUrl = (process.env.NODE_ENV === 'development') ? 
                'http://localhost:3001' 
                : process.env.PUBLIC_URL;


///////////////////////////////////////////////////////////

//Function Component
function App() {

  const initialState = {
    fname: "",    
    lname: "",
    email: "",
    phone: "",
    message: ""
  }

  //Destructuring
  const [formData, setFormData] = useState(initialState)

  //Reset Button
  const resetFields = () => {
    setFormData({...initialState})
  }

  // const handleClick = () => {
  //   console.log("I am the handleClick");
  //   //Axios Front End call with GET
  //   axios.get('/test')
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err))
  //     .finally(() => console.log("Always!!!"));
  // };

  //Handle Change event
  const handleChange = (event)=>{
    setFormData({
        ...formData, // spread operator in order to maintain previous data
        [event.target.name] : event.target.value
    })
  }

  //Handle Submit event
  const handleSubmit = (event) =>{
    event.preventDefault()
    //Axios Front End call with POST
    axios.post(`${baseUrl}/new`, {...formData})
    .then(response => {console.log('Response data: ', response.data)
        resetFields()
  })    
    .catch(err => console.log('Error: ', err))    
  }

  //Destructuring
  let {fname, lname, email, phone, message} = formData

  ////////////////////////////////////////////////////////////////////////

  //Form Seen on the React page
  return (

    <div className="App">
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormGroup>
        <Label for="fname">First Name:</Label>
        <Input type="text" name="fname" id="fname" 
        value={fname} onChange={handleChange}
        pattern="[A-Za-z]{1,20}" required/>
        
      </FormGroup>
      <FormGroup>
        <Label for="lname">Last Name:</Label>
        <Input type="text" name="lname" id="lname" 
        value={lname} onChange={handleChange}
        pattern="[A-Za-z]{1,20}" required/>
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone:</Label>
        <Input type="phone" name="phone" id="phone" 
        value={phone} onChange={handleChange}
        pattern="^\d([0-9 -]{0,10}\d)?$" 
        required/>
        <FormText><span>Ex. 5555555555</span></FormText>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input type="email" name="email" id="email" 
        value={email} onChange={handleChange}
        pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" 
        required/>
        <FormText><span>Ex. name@example.com</span></FormText>
      </FormGroup>
      <FormGroup>
        <Label for="message">Message: </Label>
        <Input type="textarea" name="message" id="message" 
        value={message} onChange={handleChange} required/>
      </FormGroup>
      <Button className='btn-success' style={{background: "darkgreen"}}>Submit</Button>
      <Button className='btn-success' 
              type='reset' onClick={resetFields}
              style={{background: "darkred"}}>
              Reset
      </Button>
    </Form>
  </div>
    // <div className="App">
    //   <form onSubmit={handleSubmit}>

    //     <label htmlFor="fname">First Name: </label><br/>
    //     <input type="text" name="fname" id="fname" 
    //     value={fname} onChange={handleChange} 
    //     pattern="[A-Za-z]{1,20}" required/><br/>

    //     <label htmlFor="lname">Last Name: </label><br/>
    //     <input type="text" name="lname" id="lname" 
    //     value={lname} onChange={handleChange} 
    //     pattern="[A-Za-z]{1,20}" required/><br/>

    //     <label htmlFor="phone">Phone: </label><br/>
    //     <input type="te" name="phone" id="phone" 
    //     value={phone} onChange={handleChange} 
    //     pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/><br/>
    //     <small id="phoneHelp" >Format 555-555-5555</small><br/>

    //     <label htmlFor="fname">Email: </label><br/>
    //     <input type="email" name="email" id="email" 
    //     value={email} onChange={handleChange} 
    //     pattern="^[a-z0-9._%+-]+@email.com {1, 100}$" required/>
    //     <br/>

    //     <label htmlFor="fname">Message: </label><br/>
    //     <input type="text" name="message" id="message" 
    //     value={message} onChange={handleChange} required/><br/><br/>

    //     <button type="submit">Submit</button>
    //     <button type="reset" onClick={resetFields}>Reset</button>
    //   </form>

    // </div>
  );
}

export default App;
