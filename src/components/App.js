import React, { Component } from "react";
import ArticleList from "./ArticleList";
import articles from "./fixtures";
import "bootstrap/dist/css/bootstrap.css";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    reverted: false,
    characters: []
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {

    const { characters } = this.state;

    return (

      // <div>
      //     <h1>App Name</h1>
      //     <ArticleList article={articles[0]} foo="bar" flag={true}/>
      // </div>

      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">App Name</h1>
          <button className="btn btn-success" onClick={this.revert}>
            Revert
          </button>
        </div>

        <ArticleList articles={this.state.reverted ? articles.reverse() : articles}/>

        <Table tabledata={characters} removeCharacter={this.removeCharacter} />

        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }

  revert = () => {
    this.setState({
      reverted: !this.state.reverted
    });
  };
}

export default App;
