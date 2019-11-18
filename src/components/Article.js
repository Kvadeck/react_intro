import React, { Component } from "react";

class Article extends Component {
    
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         isOpen: true
    //     }

    //     this.handleClick = handleClick.bind(this)
    // }

    state = {
        isOpen: false
    } 
    // experemental syntax

  render() {
    const { article } = this.props;

    const body = this.state.isOpen && <section>{article.title}</section>;

    return (
      <div className="hello" style={{ color: "red" }}>
        <div>
          <h2>{body}</h2>
          
          {article.title}

          <button onClick={this.handleClick()}>

              {this.state.isOpen ? 'close' : 'open'}

          </button>

          {body}

          {/* <h3>creation date: {new Date(article.date).toDateString()}</h3> */}
        </div>
      </div>
    );
  }

  handleClick = () => {

    console.log('test');

    // this.setState({
    //     isOpen: !this.state.isOpen
    // })
  }

}




export default Article;
