import "./nosotros.css";

const nosotros = () => {
    return (  
        <>
            <main className="nosotros nosotros__contenedor">
                <h2 className="nosotros__heading">Nosotros</h2>

                <div className="nosotros__grid">
                    <img src="./img/nosotros.jpg" alt="imagen nosotros"/>

                    <div className="nosotros__contenido">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur recusandae obcaecati, ipsam hic assumenda excepturi repellat explicabo blanditiis dolorem quisquam similique eum, consequuntur vel commodi! Recusandae assumenda distinctio quidem dolorem!</p>
                        
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur recusandae obcaecati, ipsam hic assumenda excepturi repellat explicabo blanditiis dolorem quisquam similique eum, consequuntur vel commodi! Recusandae assumenda distinctio quidem dolorem!</p>
                    </div>
                </div>
            </main>
        </>
    );
}
 
export default nosotros;