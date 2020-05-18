import React from "react";
import { TodoItems } from "./TodoItems.js";
import "./App.css";

export class Todo extends React.Component {
  state = {
    todo: "",
    todo_arr: [],
    edit: false,
  };

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  handleClick = () => {
    if (this.state.todo.length === 0) {
      return;
    }
    const todo_item = { todo: this.state.todo, id: new Date().getTime() };

    // this.setState((state) => {
    //   return { todo_arr: state.todo_arr.concat(todo_item), todo: "" };
    // });
    this.setState((state) => {
      return { todo_arr: [...state.todo_arr, todo_item], todo: "" };
    });
  };

  handleDelete = (id) => {
    // const index = this.state.todo_arr.findIndex((todo) => {
    //   return todo.id === id;
    // });

    // this.setState((state) => ({ todo_arr: state.todo_arr.splice(index, 1) }));

    // console.log(index);
    const newA = this.state.todo_arr.filter((todo) => {
      return todo.id !== id;
    });

    console.log(newA);

    this.setState({ todo_arr: newA });
  };

  // handleEdit = (id) => {
  //   const edited=this.state.todo_arr.map((todo)=> {
  //     if(todo.id === id) {
  //       return this
  //     }
  //   })
  // };

  edit = () => {
    this.setState((state) => ({ edit: !state.edit }));
    console.log(this.state.edit);
  };

  render() {
    return (
      <div className="App">
        <h1>TODO</h1>
        <input
          value={this.state.todo}
          placeholder="Search"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add Todo</button>
        <TodoItems
          hanedit={this.handleEdit}
          sot={this.state}
          edit={this.edit}
          todo={this.state.todo_arr}
          del={this.handleDelete}
        />
      </div>
    );
  }
}
