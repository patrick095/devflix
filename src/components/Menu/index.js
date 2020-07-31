import React from 'react';
import Logo from '../../assets/Logo.png'
import "./styles.css"
import Button from "../Button"
import { Link } from 'react-router-dom'

function Menu(){

    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo" />
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;