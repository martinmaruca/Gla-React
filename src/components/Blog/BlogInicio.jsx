import {Link} from "react-router-dom";
import "./blog.css";

const blog = () => {
    return (  
        <>
        <section className="blog">
                <h2 className="blog__heading">Nuestro Blog</h2>
            <div className="blog__contenedor blog__grid">
                <article className="entrada">
                    <img className="entrada__imagen" src="./img/blog_1.jpg" alt="imagen blog"/>

                    <div className="entrada__contenido">
                        <h3 className="entrada__titulo">¿Como elegir tu primer guitarra?</h3>
                        <p className="entrada__fecha">20 de Enero de 2022</p>
                        <p className="entrada__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus laborum, quas assumenda, dolorem placeat quo, aliquam labore incidunt alias molestiae maxime quaerat distinctio numquam quam voluptatum. Beatae, molestiae vitae?</p>
                        <Link to={"/entrada"} className="link">    
                           <a className="entrada__enlace" href="/">Leer Entrada</a>
                        </Link>

                    </div>
                </article>

                <article className="entrada">
                    <img className="entrada__imagen" src="./img/blog_2.jpg" alt="imagen blog"/>

                    <div className="entrada__contenido">
                        <h3 className="entrada__titulo">¿Como elegir tu primer guitarra?</h3>
                        <p className="entrada__fecha">20 de Enero de 2022</p>
                        <p className="entrada__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus laborum, quas assumenda, dolorem placeat quo, aliquam labore incidunt alias molestiae maxime quaerat distinctio numquam quam voluptatum. Beatae, molestiae vitae?</p>
                        <Link to={"/entrada"} className="link">  
                            <a className="entrada__enlace" href="/">Leer Entrada</a>
                        </Link>
                    </div>
                </article>

                <article className="entrada">
                    <img className="entrada__imagen" src="./img/blog_3.jpg" alt="imagen blog"/>

                    <div className="entrada__contenido">
                        <h3 className="entrada__titulo">¿Como elegir tu primer guitarra?</h3>
                        <p className="entrada__fecha">20 de Enero de 2022</p>
                        <p className="entrada__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus laborum, quas assumenda, dolorem placeat quo, aliquam labore incidunt alias molestiae maxime quaerat distinctio numquam quam voluptatum. Beatae, molestiae vitae?</p>
                        <Link to={"/entrada"} className="link">  
                            <a className="entrada__enlace" href="/">Leer Entrada</a>
                        </Link>
                    </div>
                </article>

                <article className="entrada">
                    <img className="entrada__imagen" src="./img/blog_4.jpg" alt="imagen blog"/>

                    <div className="entrada__contenido">
                        <h3 className="entrada__titulo">¿Como elegir tu primer guitarra?</h3>
                        <p className="entrada__fecha">20 de Enero de 2022</p>
                        <p className="entrada__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus laborum, quas assumenda, dolorem placeat quo, aliquam labore incidunt alias molestiae maxime quaerat distinctio numquam quam voluptatum. Beatae, molestiae vitae?</p>
                        <Link to={"/entrada"} className="link">  
                            <a className="entrada__enlace" href="/">Leer Entrada</a>
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    </>
    );
}
 
export default blog;