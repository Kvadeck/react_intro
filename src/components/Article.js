import React, { Component } from "react";

class Article extends Component {
    
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         isOpen: true
    //     }

    //     this.handleClick = handleClick.bind(this)
    // }

    constructor(props){
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }

    componentWillMount(){

    }

    componentWillReceiveProps(nextProps){
      console.log('---', 'will receive props');
      if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
          isOpen : nextProps.defaultOpen
      })
    }

    componentWillUpdate(){
      console.log('---', 'will update');
    }

    // state = {
    //     isOpen: true
    // } 
    // experemental syntax

  render() {
    const { article } = this.props;

    const body = this.state.isOpen && <section className='card-text'>{article.title}</section>;

    return (
     
        <div className="card mx-auto" style = {{width:'50%'}}>
          <div className="card-header">
            <h2>
              {article.title}
                <button onClick={this.handleClick} className='btn btn-primary btn-lg float-right'>
                  {this.state.isOpen ? 'close' : 'open'}
                </button>
            </h2>
          </div>
          <div className="card-body">
              <h6 className='card-subtitle text-muted'>creation date: {new Date().toDateString()}</h6>
          </div>
          {body}
          {/* {this.handleClick()} */}
        </div>
    );
  }

  handleClick = () => {

    // console.log('test');
    // return (
    //   <h2>Function works!</h2>
    // )
    this.setState({
        isOpen: !this.state.isOpen
    })
  }

}

export default Article;
