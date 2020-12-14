
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

import mapMarkerImg from '../images/Local.svg'

import '../styles/pages/pointsMarket-map.css';
import 'leaflet/dist/leaflet.css';

function PointColetaMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Ambev Cervejaria" />

                    <h2>Escolha um ponto de coleta no mapa</h2>
                    <p>Leve suas latas e ajude o mundo a ser um lugar melhor</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>Brasil</span>
                </footer>
            </aside>

            <Map center={[-21.1356135, -47.8788841]} zoom={15}
                style={{ width: '100%', height: '100%' }}>
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX}`} />
            </Map>

            <Link to="" className="create-point">
                <FiPlus size={32} color="#fff" />
            </Link>
           

        </div>
    );
}

export default PointColetaMap;