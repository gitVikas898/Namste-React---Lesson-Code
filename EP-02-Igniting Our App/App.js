import React from "react";
import ReactDOM from "react-dom/client"


const HeaderComponent = ()=>{
    return <nav className="nav-bar">
       
            <img src="https://banner2.cleanpng.com/20180820/pql/131719e0ab007dce59d9956154df089f.webp">
            </img>
        
        <div className="mid">
            <input type="text"></input>
            <button className="btn">Search</button>
        </div>
        <div className="right">
            <img src="https://img.freepik.com/premium-vector/free-vector-user-icon-simple-line_901408-588.jpg">
            </img>
        </div>
    </nav>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent></HeaderComponent>)






/* Assignment 
const root = ReactDOM.createRoot(document.getElementById("root"));

//Using React Element 

const header = React
.createElement("div",{className:"title"},
    [React.createElement("h1",{},"Namste H1"),
        React.createElement("h2",{},"Namste H2"),
        React.createElement("h3",{},"Namste H3"),]
)
// root.render(header);

//Using JSX

const jsxHeader = (<>
    <div className="title">
        <h1>Namste H1</h1>
        <h2>Namste H1</h2>
        <h3>Namste H1</h3>
    </div>
</>)

//Using Functional Component 

const HeaderComponent = ()=>{
    return <div className="title">
        <h1>Namste H1</h1>
        <h2>Namste H1</h2>
        <h3>Namste H1</h3>
    </div>
}

root.render(<HeaderComponent></HeaderComponent>); */


















// const heading = React.createElement(
//     "h2",
//     {id:"heading-2"},
//     "This is episode 3"
// );

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
// );
// const root2 = ReactDOM.createRoot(
//     document.getElementById("root-2")
// );

// const root3 = ReactDOM.createRoot(
//     document.getElementById("root-3")
// );

// const jsxHeading = (
//     <><h1 className="head">
//         This is React Element inside Component
//     </h1><img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" className="image"></img></>
// );

// //React Functional Component

// const Title = () =>{
//     return <h1>Namaste React using JSX 🚀</h1>
// }

// const Button = ()=>{
//     return <button className="btn">Click Me</button>
// }

// const num = <h2>This is JS Code in JSX</h2>;

// const HeadingComponent = ()=>{
// return <div className="container">
//     {jsxHeading}
//     {Title()}
//     <h1 className="heading">Namaste React Functional Component</h1>
//     <Button></Button>
// </div>
// }

// root.render(<HeadingComponent></HeadingComponent>);
// root2.render(<HeadingComponent></HeadingComponent>);
// root3.render(<HeadingComponent></HeadingComponent>);
