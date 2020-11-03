import React, { Component } from 'react';
import './App.css';
// Components 
import TodoHeader from './components/todoHeader/TodoHeader'
import TodoInput from './components/todoInput/TodoInput'
import Todos from './components/todos/Todos'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit = event => {
    event.preventDefault();
    const todos = [...this.state.todos, {
      id: Date.now(),
      text: this.state.newTodo,
      isComplete: false
    }];
    this.setState({todos, newTodo: ''});
  }
  handleComplete = id => {
    this.setState(function(cloneOfState){
      let indexOfTodo = cloneOfState.todos.findIndex(todo => {
        return todo.id === id
      })
    
      let foundTodo = cloneOfState.todos[indexOfTodo]
      foundTodo.isComplete = !foundTodo.isComplete;
      return cloneOfState
    })
  }
  handleDelete = id => {
    this.setState(cloneOfState => {
          //filter through current todos and return everything that is not equal
    //
    return cloneOfState.filter(todo => {
      return todo.id != id
      })      
    })
  }       

  render() {
    return (
      <div className="App" id="container">
        <TodoHeader />
        <TodoInput 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange}
          newTodo={this.state.newTodo}
        />
        <Todos
          todos={this.state.todos}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default App;


// import React, { Component } from 'react';
// import './App.css';

// //Components
// import Todos from './components/todos/Todos';
// import TodoHeader from './components/todoHeader/TodoHeader';
// import TodoInput from './components/todoInput/TodoInput';


// const TodoItem = ({text}) => (
//   <li>{text}</li>
// )

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//       newTodo: ''
//     };
//     // this.handleSubmit = this.handleSubmit.bind(this);
//     // this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange = event => {
//     this.setState({[event.target.name]: event.target.value});
//   }

//   // handleSubmit = event => {
//   //   event.preventDefault();
//   //   const todos = [...this.state.todos, this.state.newTodo];
//   //   this.setState({todos, newTodo: ''});
//   // }

  
//   handleSubmit = event => {
//     event.preventDefault();
//     const todos = [...this.state.todos, {
//       id: Date.now(),
//       text: this.state.newTodo,
//       isComplete: false
//     }];
//     this.setState({todos, newTodo: ''});
//   }

//   handleComplete = id => {
//     //temporary copy of the state
//     //Function Component
//     this.setState((cloneOfState => {
//       let indexOfTodo = cloneOfState.todos.findIndex(todo => {
//         return todo.id === id
//       })
//       let foundTodo = cloneOfState.todos[indexOfTodo]
//       foundTodo.isComplete = !foundTodo.isComplete
//       return cloneOfState
//     }))
//   }

//   render(){
//     const todoslist = this.state.todos.map((todo, index) => (
//       <TodoItem key={index} text={todo} />
//     ))

//     return (
//       <div className="App">
//         <TodoHeader />
//         <TodoInput
//             handleonSubmit={this.handleSubmit} 
//             handleonChange={this.handleonChange} 
//             newTodo={this.state.newTodo}/>  

//             <Todos 
//               todos={this.state.todos}
//               handleComplete={this.handleComplete}
//             />     
//         <div className="todo-content">
//           <ol>
//             {todoslist}
//           </ol>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;



// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//       newTodo: ''
//     };
//     // this.handleSubmit = this.handleSubmit.bind(this);
//     // this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({[event.target.name]:event.target.value});
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const todos = [...this.state.todos, this.state.newTodo];
//     this.setState({todos, newTodo: ''})
//   }

//   render(){
//     const todoslist = this.state.todos.map((todo,index) => (
//       <TodoItem key={index} text={todo} />
//     ));

//     return (
//       <div className="App">
//         <h1>Simple Todo App</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             className="todo-input"
//             autoComplete="off"
//             type="text"
//             name="newTodo"
//             placeholder="What needs to be done?"
//             onChange={this.handleChange}
//             value={this.state.newTodo}
//             />
//           <buton type="submit" className="save-button">SAVE</buton>  
//         </form>
//         <div className="todo-content">
//           <ol>
//               {todoslist}
//           </ol>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;
