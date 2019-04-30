import React , {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
class App extends Component {
  state= {
    todos:[
      {
        id: uuid.v4(),
        title: "Clean the room",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Cook meals",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "complete codes",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "complete react learning",
        completed: false
      }
    ]
   
  }
  markComplete = (id)=>{
   this.setState({
     todos: this.state.todos.map(todo => {
       if(todo.id === id){
         todo.completed = !todo.completed
       }
       return todo;
     })
   })
  }
// addTodo
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title: title,
    completed: false
  }
  this.setState({
    todos: [...this.state.todos, newTodo]
  })
}
// delete todo
  delTodo = (id)=>{
    this.setState({
      todos: [...this.state.todos.
        filter(todo => todo.id !== id)]
    })
  }
    
  render(){
    return (
      <div className="container"> 
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} 
        markComplete={this.markComplete}
         delTodo={this.delTodo}/>
      </div>
      
    )
  }
}


export default App;
