import React from "react";

export default function NumAleatorio(props){
    const {min, max} = props;
    const aleatorio = parseInt(Math.random() * (max - min) + min);
    return (
        <div>
            <h4>Número aleatório</h4>
            <p>Min: {min}</p>
            <p>Max: {max}</p>
            <p> Número gerado = {aleatorio}</p>
        </div>
    )
}