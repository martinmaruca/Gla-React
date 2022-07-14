import StyledGreeting from "./StyledGreeting";
import itemsdata from "../data/ItemsData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

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
            setItems(itemsdata);
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
        <ItemList items={items}/>
        </>
    );
}
 
export default ItemListContainer;

