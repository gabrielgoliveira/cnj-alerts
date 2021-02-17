import React, {useEffect, useState} from 'react';

import Header from '../components/Header';
import AlertElement from '../components/AlertElement';

import '../styles/pages/ListAlertsAll.css';
import api from '../services/api';

interface alerts {
    alerta: {
        id: number,
        grau: number,
        sigla_tribunal: string,
        numero: string,
        codigo_unidade: number,
        tempo_medio_movimentos: number,
    },
      
      unidade: [
        {
          id: number,
          id_pai: number,
          nome_unidade: string,
          tipo: string,
          grau: string,
          esfera: string,
          cidade: string,
          uf: string,
          latitude: string,
          longitude: string,
          capital: number,
          quant_processos: number,
          tempo_medio: number,
          tempo_entre_mov: number,
          processos_alerta: number
        }
      ],
      unidade_superior: [
        {
            id: number,
            id_pai: number,
            nome_unidade: string,
            tipo: string,
            grau: string,
            esfera: string,
            cidade: string,
            uf: string,
            latitude: string,
            longitude: string,
            capital: number,
            quant_processos: number,
            tempo_medio: number,
            tempo_entre_mov: number,
            processos_alerta: number
        }
      ]
}

function ListAlertsAll(){

    const [alertas, setAlertas] = useState<alerts[]>([]);
    useEffect(()=> {
        api.get('alertas/detalhamento').then(response => {
            setAlertas(response.data);
        })
    }, []);

    return(
        <div id="alerts-all">
            <Header/>
            <div id="content">
                <h1>List Alerts All</h1>
                <div id="tabela">
                
                       {alertas.map(element => {
                           return(
                                <p>{element.unidade[0].nome_unidade} - {element.alerta.numero} - {element.alerta.grau} - {element.alerta.sigla_tribunal}</p>
                            );
                       })}
                  
             
                </div>
            </div>
            
        </div> 
    );
}

export default ListAlertsAll;