import React from 'react'
function ItemList( props ) {
    
  return (
    <>
    {
        props.items.map(item => {
            return (
            <main className="productos productos__contenedor" key={item.id}>
                <div className="productos__grid">
                    <div className="producto">
                        <img className="producto__imagen" src={item.image} alt="imagen guitarra"/>
        
                        <div className="producto__contenido">
                            <h3 className="producto__nombre">{item.title}</h3>
                            <p className="producto__descripcion">{item.description}</p>
                            <p className="producto__precio">$ {item.price}</p>
                            <a className="producto__enlace" href="producto.html">Mas Información</a>
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

export default ItemList