//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Contador from "./component/contador.jsx";


//Renderizamos la app cada segundo.
setInterval(()=>{
    ReactDOM.createRoot(document.getElementById('app')).render(<Contador />);
}, 1000)




