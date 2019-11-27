import React from "react";
import ReactDOM from "react-dom";
// import AppNews from './components/AppNews'
// import App from './components/App'
import App from './components/Api'

// function HellowWorld() {
//     return(
//         <div>
//             <h1>Hello world!</h1>
//         </div>  
//     );
// }

// class Hello extends React.Component {

// render() {

//     const Hello = HellowWorld();

//     return(
//         <div>
//             {Hello} 
//         </div>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));