import React from 'react'
import ItemCount from "../ItemCount/ItemCount";

function handleOnAdd(count) {
    alert(`Se agregaron ${count} al carrito`);}

function detailCards({items}) {   
  return (
    <>
            <main className="productos productos__contenedor">
                    <div className="producto detalle">
                        <img className="producto__imagen" src={items.image} alt="imagen guitarra"/>
        
                        <div className="producto__contenido">
                            <h3 className="producto__nombre">{items.title}</h3>
                            <div className='espects'>
                                <p><span>Marca:</span> {items.marca}</p>
                                <p><span>Modelo:</span> {items.modelo}</p>
                                <p><span>Año:</span> {items.año}</p>
                                <p><span>Origen:</span> {items.origen}</p>
                                <p><span>Forma del Cuerpo:</span> {items.forma}</p>
                                <p><span>Madera:</span> {items.madera}</p>
                                <p><span>Color:</span> {items.color}</p>
                                <p><span>Acabados:</span> {items.acabados}</p>                        
                            </div>      
                            <p className="producto__precio">$ {items.price}</p>
                            <div className='boton__card'>
                                <ItemCount onAdd={handleOnAdd} stock={10} initial={0}/>
                            </div>
                        </div>
                    </div>      
            </main>
    </>
  )
}

export default detailCards 