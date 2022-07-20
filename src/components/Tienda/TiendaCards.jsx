import React from 'react'
import ItemCount from "../ItemCount/ItemCount";

function handleOnAdd(count) {
    alert(`Se agregaron ${count} al carrito`);}

function TiendaCards(props) {
    
  return (
    <>
    {
        props.items.map(item => {
            const {id, title, price, description, image} = item
            return (
            <main className="productos productos__contenedor" key={id}>
                <div className="productos__grid">
                    <div className="producto">
                        <img className="producto__imagen" src={image} alt="imagen guitarra"/>
        
                        <div className="producto__contenido">
                            <h3 className="producto__nombre">{title}</h3>
                            <p className="producto__descripcion">{description}</p>
                            <p className="producto__precio">$ {price}</p>
                            <ItemCount onAdd={handleOnAdd} stock={10} initial={0}/>
                        </div>
                    </div>      
                </div>
            </main>
            )
        } )
    }
    </>
  )
}

export default TiendaCards  
      