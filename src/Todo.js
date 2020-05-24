import React from "react";
import { TodoItems } from "./TodoItems.js";
import "./Todo.css";

export class Todo extends React.Component {
  state = {
    todo: "",
    todo_arr: JSON.parse(localStorage.getItem("todo_arr")) || [],
  };
  // [{},{}]
  handleChange = (e) => {
    this.setState({ todo: e.target.value });
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

  handleUpdate = (id, text) => {
    this.setState((state) => {
      //       const items = [...this.state.todo_arr]
      // const newItems = items.map(item => {
      //     if (item.id === id){ item.todo = text }
      //     return item
      // })
      // this.setState({
      //   items: newItems
      // })
      const newState = state.todo_arr.map((item) => {
        const newItem = { ...item };
        if (newItem.id === id) {
          newItem.todo = text;
        }
        return newItem;
      });

      console.log(newState);
      return {
        todo_arr: newState,
      };
    });
  };

  componentDidUpdate(props, prevState) {
    if (prevState.todo_arr !== this.state.todo_arr) {
      localStorage.setItem("todo_arr", JSON.stringify(this.state.todo_arr));
    }
    console.log("re-rendering..");
  }

  render() {
    return (
      <div className="container">
        <h1>React-Todo</h1>

        <div className="inp-el">
          <input
            value={this.state.todo}
            placeholder="Enter Todo"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Add Todo</button>
        </div>

        <TodoItems
          update={this.handleUpdate}
          todo={this.state.todo_arr}
          del={this.handleDelete}
        />
      </div>
    );
  }
}
