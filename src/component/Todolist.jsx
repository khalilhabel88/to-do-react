import React, { Component } from "react";

export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabitem: [
        { text: "world", iscomplet: false },
        { text: "Moon", iscomplet: false }
      ],
      x: ""
    };
  }
  hadelchange = e => {
    this.setState({ x: e.target.value });
  };
  handelsubmit = e => {
    e.preventDefault();
    if (this.state.x)
      this.setState({
        tabitem: [
          ...this.state.tabitem,
          { text: this.state.x, iscomplet: false }
        ],
        x: ""
      });
    else {
      alert("sorry");
    }
  };
  handelDlete = i => {
    this.setState({
      tabitem: this.state.tabitem.filter((el, index) => index !== i)
    });
  };
  handlClick = i => {
    this.setState({
      tabitem: this.state.tabitem.map((el, index) =>
        index === i ? { ...el, iscomplet: !el.iscomplet } : el
      )
    });
  };
  render() {
    return (
      <div className="list">
        <form onSubmit={this.handelsubmit}>
          <input type="text" onChange={this.hadelchange} value={this.state.x} />
          <button>ADD</button>
        </form>

        <ul>
          {this.state.tabitem.map((el, i) => (
            <div key={i}>
              <button onClick={() => this.handlClick(i)}>
                {el.iscomplet ? "undo" : "complete"}
              </button>
              <button onClick={() => this.handelDlete(i)}>delete</button>
              <li className={el.iscomplet ? "iscomplet" : ""}>{el.text}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
