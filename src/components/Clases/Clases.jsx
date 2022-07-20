import "./clases.css";

const clases = () => {
    return (  
        <>
        <section className="cursos">
            <div className="cursos__contenedor cursos__grid">
                <div className="cursos__contenido">
                    <h2 className="cursos__heading">Aprende a tocar guitarra</h2>
                    <p className="cursos__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque enim fugiat nisi inventore laborum facilis cum reiciendis vel totam velit molestias, animi, odit, architecto officia. Dicta illum exercitationem voluptatem laudantium.</p>
                    <a className="cursos__enlace" href="/">Más información</a>
                </div>
            </div>
        </section>
    </>
    );
}
 
export default clases;