import ItemCount from "../ItemCount/ItemCount";

const cards = () => {
    return ( 
        <>
    <main className="productos productos__contenedor">
        <div className="productos__grid">

            <div className="producto">
                <img className="producto__imagen" src="/img/guitarra_01.jpg" alt="imagen guitarra"/>

                <div className="producto__contenido">
                    <h3 className="producto__nombre">Lukather</h3>
                    <p className="producto__descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi</p>
                    <p className="producto__precio">$500</p>
                    <ItemCount />
                    <a className="producto__enlace" href="producto.html">Comprar</a>
                </div>
            </div> 

            <div className="producto">
                <img className="producto__imagen" src="/img/guitarra_02.jpg" alt="imagen guitarra"/>

                <div className="producto__contenido">
                    <h3 className="producto__nombre">SRV</h3>
                    <p className="producto__descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi</p>
                    <p className="producto__precio">$600</p>
                    <ItemCount />
                    <a className="producto__enlace" href="producto.html">Comprar</a>
                </div>
            </div>

            <div className="producto">
                <img className="producto__imagen" src="img/guitarra_03.jpg" alt="imagen guitarra"/>

                <div className="producto__contenido">
                    <h3 className="producto__nombre">Borland</h3>
                    <p className="producto__descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi</p>
                    <p className="producto__precio">$750</p>
                    <ItemCount />
                    <a className="producto__enlace" href="producto.html">Comprar</a>
                </div>
            </div>

            
        </div>
    </main>
    </>
     );
}
 
export default cards;