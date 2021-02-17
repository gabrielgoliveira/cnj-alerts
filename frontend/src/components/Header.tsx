import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/components/header.css';

function Header(){
    return(
        <div id="header">
            <h1><Link to = "/map">CNJ Alertas</Link></h1>
            <ul>
                <li><Link to = "/map">Mapa</Link></li>
                <li><Link to = "/list/alerts-all">Listar todos os Alertas</Link></li>
            </ul>
        </div>
    );
}

export default Header;