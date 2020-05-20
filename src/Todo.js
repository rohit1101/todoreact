import React from "react";
import { TodoItems } from "./TodoItems.js";
import "./App.css";

export class Todo extends React.Component {
  state = {
    todo: "",
    todo_arr: [],
    edit: false,
    editID: "",
    editedText: "",
  };

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  handleEditChange = (e) => {
    this.setState({ editedText: e.target.value });
  };

  handleClick = () => {
    if (this.state.todo.trim().length === 0) {
      return;
    }
    const todo_item = { todo: this.state.todo, id: new Date().getTime() };

    this.setState((state) => {
      return { todo_arr: state.todo_arr.concat(todo_item), todo: "" };
    });
    // this.setState((state) => {
    //   return { todo_arr: [...state.todo_arr, todo_item], todo: "" };
    // });
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
    this.setState({ todo_arr: newA });
  };

  edit = (item, id) => {
    this.setState({ edit: !this.state.edit });
    this.setState({ editedText: item, editID: id });
    // this.setState((state) => {
    //   return state.todo_arr.map((item) => {
    //     return item.id === id ? (item.todo: editedText) : "";
    //   });
    // });
  };

  handleBlur = (e) => {
    console.log(e.target.value);
    // this.setState((state) => {
    //   return state.todo_arr.map((item) => {
    //     return item.id === state.editId && (item.todo = state.editedText);
    //   });
    // });
  };

  handleUpdate = (e) => {
    this.setState((state) => {
      return state.todo_arr.map((item) => {
        return item.id === state.editID && (item.todo = state.editedText);
      });
    });
    this.setState({ edit: false });
  };

  render() {
    return (
      <div className="App">
        <h1>TODO</h1>
        {this.state.edit ? (
          <div>
            <input
              value={this.state.editedText}
              onChange={this.handleEditChange}
              onInput={this.handleBlur}
            />
            <button onClick={this.handleUpdate}>Update</button>
          </div>
        ) : (
          ""
        )}
        <input
          value={this.state.edit ? "" : this.state.todo}
          placeholder="Search"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add Todo</button>
        <TodoItems
          todo={this.state.todo_arr}
          del={this.handleDelete}
          editHandler={this.edit}
        />
      </div>
    );
  }
}
