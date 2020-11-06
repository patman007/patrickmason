import React, {useState} from "react";
import axios from 'axios'
import "./App.css";


function App() {

  const initialState = {
    fname: ""
    // TODO: delete this line and uncomment other inputs as needed
    // lname: "",
    // email: "",
    // phone: "",
    // message: ""
  }

  const [formData, setFormData] = useState(initialState)

  const resetFields = () => {
    setFormData(initialState)
  }

  const handleClick = () => {
    console.log("I am the handleClick");
    //Axios Front End call with GET
    axios.get('/test')
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
      .finally(() => console.log("Always!!!"));
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
    //Axios Front End call with POST
    axios.post('/new', formData)
    .then(response => console.log('Response data: ', response.data))
    .catch(err => console.log('Error: ', err))
    resetFields()
  }

  const handleChange = (event)=>{
    setFormData({
        ...formData, // spread operator in order to maintain previous data
        [event.target.name] : event.target.value
    })
  }

  
  let {fname} = formData;

  return (
    <div>
      <h1>MERN DEMO</h1>
      <button onClick={handleClick}>Click Me</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name: </label>
        <input type="text" name="fname" id="fname" value={fname} onChange={handleChange} />
        <button type="submit">SUBMIT</button>
        <button type='reset' onClick={resetFields}>RESET</button>
      </form>
    </div>
  );
}

export default App;
