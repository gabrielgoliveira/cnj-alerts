import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi';
import { Map,TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/map.css';
import mapMarkerImg from '../images/map-marker.png';
import Header from '../components/Header';
import api from '../services/api';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

interface trt {
    id: number,
    nome_tribunal: string,
    cidade: string,
    uf: string,
    codigo_ibge: number,
    latitude: number,
    longitude: number,
    capital: boolean
}

function MapPage() {
    const [tribunais, setTribunais] = useState<trt[]>([]);
    useEffect(()=> {
        api.get('tribunais').then(response => {
            setTribunais(response.data);
        })
    }, []);
    return(
        <div id="page">
            <Header/>
            <div id='title'>
                <h1>Alertas: Total de 5986 alertas</h1>
            </div>
            
            
            <Map
                center = {[-16.6804114,-49.3932539]}
                zoom={4}
                style={{
                    width:'100%',
                    height:'100%'
                }}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
                <TileLayer 
                    url= {`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2FicmllbGdvbHZzIiwiYSI6ImNrZ2l1cmk5bTAzbWIycm1zdTN6MG55aG8ifQ.9GKskUFRc9goos5QtrX6Ig`}
                />
                {tribunais.map(tribunal => {
                    return (
                        <Marker 
                            icon={mapIcon}
                            position={[tribunal.latitude, tribunal.longitude]}
                            key={tribunal.id}
                        > 
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                                Alerta em:
                                {tribunal.nome_tribunal}
                                <Link to ={`alertas/tribunal/${tribunal.id}`}> 
                                    <FiArrowRight size={20} color="#000"/>
                                </Link>
                            </Popup>    
                        </Marker>
                    );
                })}
            </Map>
        </div>
    );
}

export default MapPage;