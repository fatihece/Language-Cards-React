import React,{useState} from 'react';
import logo from "../assets/react.svg";
import { categories } from "../helper/data"
import "./Card.css"




const Card = () => {
    const[showInfo,setShowInfo] = useState(false)

    return (

        <div className="container">
            <div className="logo">
                <img src={logo} alt="react-logo"></img>
            </div>
            <div className="card-container">
                <h3>Languages</h3>
                {categories.map((card,index) => {
                    return(
                        
                        <div className="card" onClick={() => alert("hey mama")}>
                            <div className="image">
                                <img src={card.img} alt={card.name} />
                            </div>
                            <div className="title">
                                <h5>{card.name }</h5>
                            </div>

                            <div className="info">
                                <ul>
                                    <li>{card.options[0]}</li>
                                    <li>{card.options[1]}</li>
                                    <li>{card.options[2]}</li>
                                </ul>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card;
