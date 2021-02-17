import React from 'react';

interface alerts {
    id: number,
    grau: number,
    sigla_tribunal: string,
    numero: string,
    codigo_unidade: number,
    tempo_medio_movimentos: number,
}

function AlertElement(props: alerts){
    return (
        <tr>
            <td>{props.numero}</td>
        </tr>
    );
}

export default AlertElement;
