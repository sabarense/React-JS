import React from "react";
import "./Card.css"

export default function Card2(props) {
  return (
      <div className="Card">
        <div><h3>Passagem de parâmetros via props</h3></div>
        <div className="Title">{props.title}</div>
        <div className="Content">{props.text}</div>
        <div className="Children">{props.children}</div>
      </div>
  );
}
