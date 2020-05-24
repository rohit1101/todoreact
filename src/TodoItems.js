import React from "react";
import { Item } from "./Item";

export function TodoItems({ todo, del, update }) {
  let i = 0;
  return (
    <div className={todo.length !== 0 ? "todo-con" : ""}>
      {todo.map((item) => {
        return <Item key={i++} item={item} del={del} update={update} />;
      })}
    </div>
  );
}
