import CartWidget from "../CartWidGets/CartWidget";
import './styles.css';

const NavBar = () => {
    return  (
    <>
        <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg grid grid-cols-4 gap-4 content-center px-6">
            <div>
                <h1 className="text-3xl font-bold mr-4 sm:text-4xl">LOGO.</h1>
            </div>
            <div className="flex justify-between ">
                <a href="/">Inicio</a>
                <a href="/">Nosotros</a>
                <a href="/">Como funciona?</a>
            </div>
            <div>
                <CartWidget />
            </div>
            <div className="flex justify-end gap-4">
                <a href="/">Regitrate</a>
                <a href="/" className="bg-violet-500 rounded-md p-1.5 hover:bg-violet-700 hover:text-white">Ingresar</a>
            </div>
        </div>    
    </>
    );
};

export default NavBar;
