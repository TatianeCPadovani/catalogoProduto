import React from "react";
import "./Card.css";

const Card = (props)=>{
return(

    <div className="card">
      <img src="./images/produto.jpg" className="card-image" />
      <h2 className="card-name">Nome</h2>
      <p className="card-price">Preço</p>
      <p className="card-description">Descrição</p>
    </div>
)
}

export default Card;