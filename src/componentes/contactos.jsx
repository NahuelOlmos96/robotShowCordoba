import React from 'react'
import "../estilos/contactos.css"
import whatapp from "../imganes/whatapp.png";
import tiktok from "../imganes/tiktok.png";
import instagram from "../imganes/instagram.png";

function Contactos() {
    return (
        <div>
            <div className="contactos row">
               
                <div className="containerfotos col-12 row">
                    <img src={whatapp} class=" col-4" alt="..." />
                    <img src={instagram} class=" col-4" alt="..." />
                    <img src={tiktok} class=" col-4" alt="..." />
                </div>
                <div className='row col'>
                    <div className='col-4'>whatapp</div>
                    <div className='col-4'>instragram</div>
                    <div className='col-4'>tiktok</div>
                </div>
            </div>
        </div>
    )
}

export default Contactos