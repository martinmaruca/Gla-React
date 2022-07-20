import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import NavBarIndex from './components/NavBar/NavBarIndex';
import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Clases from './components/Clases/Clases';
//import Blog from './components/Blog/Blog';
//import Nosotoros from './components/Nosotros/Nosotros';
//import Tienda from './components/Tienda/Tienda';
import Footer from './components/Footer/Footer';
//import Entrada from './components/Entrada/Entrada'; 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
//import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      {/* <NavBarIndex /> */}
      <NavBar />
{/*       <ItemListContainer/>
      <Clases />
      <Blog />
      <Nosotoros />
      <Tienda /> 
      <Entrada /> */}
      <ItemDetailContainer /> 
      <Footer />  
    </>
);
}

export default App;

