import React, { Component, useState } from "react";
import "./Home.css"
import NavBar from "../NavBar/NavBar";
import Maincontent from "../Maincontent/Maincontent";
// class Home extends Component{
//     constructor(props){
//         super(props);
//         this.state ={ }
//     }
// render() {
//     return(
//         <div>
//                     <NavBar/>
//                     <Maincontent/>
//         </div>
//     );
// }
// }

const Home = ()=>{
    const [status,setStatus]=useState("first");
    const changeText=()=>{
            setStatus("second") 
    }
    return <div>
        <div>Home</div>
        <div>{status}</div>
        <button onClick={changeText}>Change Text</button>
    </div>
}

export default Home;