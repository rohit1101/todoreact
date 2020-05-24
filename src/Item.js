import React from "react";

export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editedText: props.item.todo,
    };
  }

  handleEditChange = (e) => {
    this.setState({ editedText: e.target.value });
  };

  render() {
    const { item, del, update } = this.props;
    return (
      <div className="Todo">
        {this.state.edit ? (
          <div>
            <input
              value={this.state.editedText}
              onChange={this.handleEditChange}
            />
            <button
              onClick={(e) => {
                this.state.editedText.length !== 0
                  ? update(item.id, this.state.editedText)
                  : alert("Enter Edited Todo");
                this.setState({ edit: false });
              }}
            >
              Update
            </button>
          </div>
        ) : (
          <p id={item.id}>
            {item.todo} created at {new Date(item.id).toLocaleTimeString()}
            <i
              className="fas fa-edit"
              onClick={(e) => this.setState({ edit: true })}
            />
            <i className="fas fa-trash-alt" onClick={(e) => del(item.id)} />
          </p>
        )}
      </div>
    );
  }
}
