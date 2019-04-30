import React, { Component } from 'react'

export default class AddTodo extends Component {
  state ={
    AddTodo: ''
  }

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  })

  onSubmit = (e)=>{
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex', margin: '10px auto'}}>
        <input 
        style={{flex: '8', fontFamily: "cursive"}} 
        type="text"
        name="title"
        placeholder="  Add Todos......" 
        value= {this.state.title}
        onChange= {this.onChange}
        />
        <input style={{flex: '2', fontFamily: "cursive"}} 
        type="submit" 
        value="submit" 
        className="btn"/>
      </form>
    )
  }
}
