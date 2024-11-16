// const heading = React.createElement("h1",
//     {id:'heading-text'},
//     "Hello World From React!"
// );

/**
 * <div id=container>
 *     <div id="box1">
 *          
 *      </div>
 *     <div id="box2">
 * 
 *      </div>
 *     <div id="box3">
 *  
 *      </div>
 * </div>
 * 
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const box = React.createElement("div",{id:"container"},[
    React.createElement("div",{id:"box1"}),
    React.createElement("div",{id:"box2"}),
    React.createElement("div",{id:"box3"})
])

setTimeout(()=>{
    root.render(box);
},5000);
