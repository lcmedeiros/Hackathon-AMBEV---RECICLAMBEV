import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg'

function Landing() {
    return (
        <div id = "page-landing" >
            <div className="content-wrapper">
                <img src={logoImg} alt="Ambev Cervejaria" />
                <main>
                    <h1>Pense no futuro</h1>
                    <p>A Ambev te ajuda a melhorar o mundo, faça sua parte</p>
                </main>
                <div className="location">
                    <strong>São Paulo</strong>
                    <span>Brasil</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>

            </div>
    </div >
    );
}

export default Landing;