import React from 'react';
import logo from "../assets/react.svg";
import { categories } from "../helper/data"
import "./Card.css"
import Item from "./Item"


const Card = () => {
    
    return (

        <div className="container">
            <div className="logo">
                <img src={logo} alt="react-logo"></img>
            </div>
            <div className="card-container">
                <h3>Languages Card</h3>
                {categories.map((categoryEl,index) => {
                    return( <Item card={categoryEl} key={index} />
                    )
                })}
            </div>
        </div>
    )
}

export default Card;
