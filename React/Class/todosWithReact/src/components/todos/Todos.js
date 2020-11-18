import React from 'react'
import TodoItem from '../todoItem/TodoItem'

const Todos = props => {

    const todoslist = props.todos.map((todo) => (
      <TodoItem
        key={todo.id} 
        id={todo.id}
        isComplete={todo.isComplete}
        text={todo.text} 
        handleComplete={props.handleComplete}
        handleDelete={props.handleDelete}
        />
    ));

    return (
        <div className="todo-content">
          <ol>
            {todoslist}
          </ol>
        </div>
    )
}

export default Todos