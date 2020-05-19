import React from "react";

export function TodoItems({ todo, del, edit, sot, newInp }) {
  let i = 0;
  return (
    <div>
      <div>
        {todo.map((item) => {
          return (
            <p key={i++} id={item.id}>
              {item.todo} created at {new Date(item.id).toLocaleTimeString()}
              <i className="fas fa-edit" onClick={(e) => edit(item.id)} />
              <i className="fas fa-trash-alt" onClick={(e) => del(item.id)} />
            </p>
          );
        })}
      </div>
    </div>
  );
}
