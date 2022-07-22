import StyledGreeting from "./StyledGreeting";
import Itemsdata from "../data/ItemsData.json";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = () => {

    let [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let promiseItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Itemsdata);
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
        <StyledGreeting text={"Nuestra Colección"} />
        <ItemList items={items} />
        </>
    );
}
 
export default ItemListContainer;

