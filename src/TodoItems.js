import React from "react";

export function TodoItems({ todo, del, edit, sot, inp }) {
  let i = 0;
  return (
    <div>
      <div>
        {todo.map((item) => {
          return !sot.edit ? (
            <p key={i++} id={item.id}>
              {item.todo} created at {new Date(item.id).toLocaleTimeString()}
              <i className="fas fa-edit" onClick={(e) => edit(item.id)} />
              <i className="fas fa-trash-alt" onClick={(e) => del(item.id)} />
            </p>
          ) : (
            <input placeholder="edit" />
          );
        })}
      </div>
    </div>
  );
}
