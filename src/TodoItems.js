import React from "react";

export function TodoItems({ todo, del, editHandler }) {
  let i = 0;
  return (
    <div>
      <div>
        {todo.map((item) => {
          return (
            <div key={i++}>
              <p id={item.id}>
                {item.todo} created at {new Date(item.id).toLocaleTimeString()}
                <i
                  className="fas fa-edit"
                  onClick={(e) => editHandler(item.todo, item.id)}
                />
                <i
                  className="fas fa-trash-alt"
                  onClick={(e) => del(item.id, item.todo)}
                />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
