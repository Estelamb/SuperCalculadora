import React from 'react';
import './header.css';
import imagemInicial from '../images/calculo.png'

const Header = (props) => {
    return(
        <header className="header">
            <img src={imagemInicial} width="40px"></img> <p> Esta é a Super Calculadora de {props.autor}!</p>
        </header>
    );
}

export default Header;