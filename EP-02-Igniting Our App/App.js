import React from "react";
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const box = React.createElement("div",{id:"container"},[
    React.createElement("div",{id:"box1"},React.createElement("h2",{id:"heading"},"This is Box 1")),
    React.createElement("div",{id:"box2"}),
    React.createElement("div",{id:"box3"})
])

setTimeout(()=>{
    root.render(box);
},5000);
