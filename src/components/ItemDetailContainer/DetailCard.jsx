import React from 'react'
import ItemCount from "../ItemCount/ItemCount";

function handleOnAdd(count) {
    alert(`Se agregaron ${count} al carrito`);}

function detailCards(props) {
    
  return (
    <>
    {
        props.items.map(item => {
            const {id, title, price, image, marca, modelo, año, origen, forma, madera, color, acabados} = item
            return (
            <main className="productos productos__contenedor" key={id}>
                    <div className="producto detalle">
                        <img className="producto__imagen" src={image} alt="imagen guitarra"/>
        
                        <div className="producto__contenido">
                            <h3 className="producto__nombre">{title}</h3>
                            <div className='espects'>
                                <p><span>Marca:</span> {marca}</p>
                                <p><span>Modelo:</span> {modelo}</p>
                                <p><span>Año:</span> {año}</p>
                                <p><span>Origen:</span> {origen}</p>
                                <p><span>Forma del Cuerpo:</span> {forma}</p>
                                <p><span>Madera:</span> {madera}</p>
                                <p><span>Color:</span> {color}</p>
                                <p><span>Acabados:</span> {acabados}</p>                        
                            </div>      
                            <p className="producto__precio">$ {price}</p>
                            <div className='boton__card'>
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

export default detailCards 