import StyledGreeting from "../ItemListContainer/StyledGreeting";
import itemsdata from "../data/ItemsData";
import { useState, useEffect } from "react";
import TiendaCards from "./TiendaCards";


const Tienda = () => {

    let [items, setItems] = useState([]);

    useEffect(() => {

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
            console.log("Finally");
        })
    }, []);
 
    return (  
        <>
        <StyledGreeting text={"Nuestra Colección"} />
        <TiendaCards items={items}/>
        </>
    );
}
 
export default Tienda;