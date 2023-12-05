import React from "react";
import { Link } from "react-router-dom";
import Banner from '../assets/banner.png'
import '../styles/Home.css'
function Home(){
    return (
        <>
        <div className="home">
            <div className="headerContainer" style={{backgroundImage: `url(${Banner})`}}>
                <h1>Some Text</h1>
                <p>Some more text in paragraph tag</p>
                <Link to = "/services"><button>Know more</button></Link>
            </div>
        </div>
        </>
    )
}

export default Home