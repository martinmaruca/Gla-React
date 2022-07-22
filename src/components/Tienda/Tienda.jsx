import StyledGreeting from "../ItemListContainer/StyledGreeting";
import itemsdata from "../data/ItemsData";
import NavBar from "../NavBar/NavBar";
import { useState, useEffect } from "react";
import TiendaCards from "./TiendaCards";
import Spinner from "../Spinner/Spinner";


const Tienda = () => {
    
    let [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        let promiseItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemsdata);
            }, 2000);
            setTimeout(() => {
                reject("Error");
            }, 2000);
        });
        
        promiseItems.then(data => {
            setItems(data);
        })
        .catch(error => {
            alert(error);
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    if(loading) return <Spinner />;
 
    return (  
        <>
        <NavBar />
        <StyledGreeting text={"Nuestra Colección"} />
        <TiendaCards items={items}/>
        </>
    );
}
 
export default Tienda;