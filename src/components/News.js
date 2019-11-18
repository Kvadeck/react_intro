import React, { Component } from "react";

class News extends Component { 

render(){
    return (
        <div>
            <h1>Test</h1>
            <button onClick={this.handeClick}>клик</button>
        </div>
    );
    }

    handeClick = () => {
        console.log('test');
    }
}



export default News;
