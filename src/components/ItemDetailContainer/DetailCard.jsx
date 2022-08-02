import { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../Cart/CartContext";        
import { data } from 'autoprefixer';
 

const DetailCards = ({ items }) =>{
    const [count, setCount] = useState(0);
    const {image, title, marca, modelo, año, origen, forma, madera, color, acabados, price, stock} = items; 
    const {addProduct} = useCartContext();

    const handleOnAdd = (count) => {
        setCount(count);
        addProduct(data, items);

    };
        
  return (
        <>
            <main className="productos productos__contenedor">
                    <div className="producto detalle">
                        <img className="producto__imagen" src={image} alt="imagen guitarra"/>
        
                        <div className="producto__contenido">
                            <h3 className="producto__nombre">{title}</h3>
                            <div className="espects">
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
                                {count === 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={0}/> : <h3>Se agregaron {count} productos al carrito </h3>}   
                            </div>
                            <div className='boton__card'>
                                <Link  onAdd={addProduct} className='producto__enlace' to="/cart">Ir al Carrito</Link>
                            </div>
                        </div>
                    </div>      
            </main>
       </>
   );
};

export default DetailCards 
