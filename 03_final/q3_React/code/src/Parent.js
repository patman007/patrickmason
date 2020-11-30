//Import React and useState
import React, { useState } from 'react'
import Child from './Child'

//Parent Functional Component
const Parent = () => {

  //Array Destructuring
  //name is a state variable 
  const [name, setName] = useState('')

  return (
    <div>
      <h1>Hello {name}</h1>
      <Child onChange={value => setName(value)}/>
    </div>
  )
}

//Export Parent Component
export default Parent