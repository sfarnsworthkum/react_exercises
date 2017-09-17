import React, { Component } from 'react';
import Todo from "./Todo.js"

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state= {
			todoState:[{
				title : "procratinate", 
				description : "just do it",
				complete : false}, 
				{title: "panic", 
				description : "in detroit",
				complete :  false}]
		}
	}
	handleComplete(idx) {
		let {todoState} = this.state;
		let newTodos = todoState.slice(0);
		newTodos[idx]["complete"] = !newTodos[idx]["complete"];
		this.setState({
			todoState : newTodos
		});
	}
	handleRemove(idx) {
		let {todoState} = this.state;
		let newTodos = todoState.slice(0, idx).concat(todoState.slice(idx + 1));
		this.setState({
			todoState : newTodos
		});
	}
  	render() {
  	var todos = this.state.todoState.map((val, idx) => 
  		<Todo title={val.title} 
  			description={val.description} 
  			complete={val.complete}
  			key={idx} 
  			removeHandler={this.handleRemove.bind(this, idx)}
  			completeHandler={this.handleComplete.bind(this, idx)}/>
  		);
    return (
      <ul className="TodoList">
        <h1>This is a List</h1>
        	{todos}
      </ul>
    );
  }
}

export default TodoList;