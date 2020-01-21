import React, { Component } from "react";
import "reset-css";
import "./App.css";
import Board from "./Components/Board";
import Card from "./Components/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      createBoard: false,
      textArray: [],
      nameValue: ""
    };
  }

  handleInput = e => {
    console.log("hit");
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  openForm = () => {
    const { createBoard } = this.state;
    this.setState({
      createBoard: !createBoard
    });
  };

  closeForm = () => {
    this.setState({
      open: false
    });
  };

  addCard = () => {
    return <Card />;
  };

  handleNotesChange = () => {
    const { textArray, nameValue } = this.state;
    if (nameValue.length > 1)
      this.setState(
        {
          textArray: [...textArray, nameValue]
        },
        () => this.setState({ nameValue: "" })
      );
  };

  handleTextChange = e => {
    this.setState({
      nameValue: e.target.value
    });
  };

  showEditableBoard = () => {
    return (
      <Card id="card-1" className="card" draggable="true">
          <section className='input-sub'>
        <input
          type="text"
          name="notes"
          onChange={e => this.handleTextChange(e)}
        />
        <button onClick={() => this.handleNotesChange()}>Add Card</button>
        </section>
      </Card>
    );
  };

  showTextBoard = (i, value) => {
    return (
      <Card key={i} id="card-1" className="card" draggable="true">
        <h2>{value}</h2>
      </Card>
    );
  };

  render() {
    const { createBoard, count, textArray } = this.state;
    console.log(createBoard, count, textArray);
    return (
      <div>
          <nav>
              <img src='https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png' />
          </nav>
        <main className="flexbox">
          <Board id="board-1" className="board">
              <h1>Backlog</h1>
            <Card id="card-1" className="card" draggable="true">
              <section className="input-sub">
              <input
                type="text"
                name="comment"
                value={this.state.comment}
                onChange={e => this.handleInput(e)}
              />
              <button>Add Card</button>
              </section>  
            </Card>
            <form>
              <label onClick={this.openForm}>+ Add Another Card</label>
            </form>
          </Board>

          <Board id="board-2" className="board">
          <h1>To Do</h1>
          <Card id="card-1" className="card" draggable="true">
              <section className="input-sub">
              <input
                type="text"
                name="comment"
                value={this.state.comment}
                onChange={e => this.handleInput(e)}
              />
              <button>Add Card</button>
              </section>  
            </Card>
            {createBoard && this.showEditableBoard()}
          </Board>

          <Board id="board-3" className="board">
          <h1>In Progress</h1>
            {textArray.map((i, v) => {
              return this.showTextBoard(v, i);
            })}
            <Card id="card-1" className="card" draggable="true">
              <section className="input-sub">
              <input
                type="text"
                name="comment"
                value={this.state.comment}
                onChange={e => this.handleInput(e)}
              />
              <button>Add Card</button>
              </section>  
            </Card>
            <Card id="card-1" className="card" draggable="true">
              <section className="input-sub">
              <input
                type="text"
                name="comment"
                value={this.state.comment}
                onChange={e => this.handleInput(e)}
              />
              <button>Add Card</button>
              </section>  
            </Card>
          </Board>

          <Board id="board-4" className="board">
          <h1>Completed</h1>
          <Card id="card-1" className="card" draggable="true">
              <section className="input-sub">
              <input
                type="text"
                name="comment"
                value={this.state.comment}
                onChange={e => this.handleInput(e)}
              />
              <button>Add Card</button>
              </section>  
            </Card>
          </Board>
        </main>
      </div>
    );
  }
}

export default App;
