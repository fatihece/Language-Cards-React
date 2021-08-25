import React, { useState } from 'react';

const Item = ({card}) => {
    const [showLogo, setShowLogo] = useState(true);

    return (
        <div className="card" onClick={() => setShowLogo(!showLogo)}>
            {showLogo ?
                <>
                    <div className="image">
                        <img src={card.img} alt={card.name} />
                    </div>
                    <div className="title">
                        <h5>{card.name}</h5>
                    </div>
                </>
                
                :
            
                    <ul className="info">
                    {card.options.map((optionEl, index) => {
                        return <li key={index}>
                                {optionEl}
                            </li>
                        })}
                    </ul>
            }
        </div>        
    )
}


export default Item;
