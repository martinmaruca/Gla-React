import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cards from './components/Cards/Cards';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer/>
      <Cards/>
    </>
);
}

export default App;

