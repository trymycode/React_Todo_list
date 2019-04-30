import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodosItem extends Component {

  getStyle = ()=>{
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      color: this.props.todo.completed ? '#888' : '#333',
      padding: '10px',
      border: '2px solid #e8b4e6'
    }
  };
  
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
        {title}
        <button onClick={ this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}
// propTypes
TodosItem.propTypes = {
  todo: PropTypes.object.isRequired 
}
const btnStyle = {
  background: '#ff2211',
  color: '#fff',
  padding: '5px 8px',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
export default TodosItem;
