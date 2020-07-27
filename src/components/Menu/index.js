import React from 'react';
import Logo from '../../assets/Logo.png'
import "./styles.css"
import Button from "../Button"

function Menu(){

    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;