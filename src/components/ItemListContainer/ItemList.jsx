
import React from 'react'
import { Link } from "react-router-dom";

function ItemList( props ) {
    
  return (
    <main className="productos productos__contenedor">
        <div className="productos__grid">
            {props.items.map(item => {
            const {id, title, price, description, image} = item;
                return (
                    <div className="producto">
                        <img className="producto__imagen" src={image} alt="imagen guitarra"/>
            
                        <div className="producto__contenido">
                            <h3 className="producto__nombre">{title}</h3>
                            <p className="producto__descripcion">{description}</p>
                            <p className="producto__precio">$ {price}</p>
                                <Link className="producto__enlace" to={`item/${id}`}>Mas Información</Link>
                        </div>
                    </div>      
                )
            } )}
        </div>
    </main>
  )
}

export default ItemList