import StyledGreeting from "../ItemListContainer/StyledGreeting";
import ItemDetail from "../data/ItemDetail";
import { useState, useEffect } from "react";
import DetailCard from "../ItemDetailContainer/DetailCard";
import "./DetailCard.css";

console.log(ItemDetail);

const Tienda = () => {

    let [items, setItems] = useState([]);

    useEffect(() => {

        let promiseItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(ItemDetail);
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
        <StyledGreeting text={"Descripción del Producto"} />
        <DetailCard items={items}/>
        </>
    );
}
 
export default Tienda;