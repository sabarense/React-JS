import React from "react";

export default function StatusAluno(props){
    const status = props.nota >= 6 ? "aprovado" : "reprovado";
    return(
        <div>
            <p>Meu nome é {props.nome}</p>
            <p>Minha nota na disciplina foi {props.nota}</p>
            <p>Eu fui {status}!</p>
        </div>
    )
}