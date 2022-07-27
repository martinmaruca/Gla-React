import StyledGreeting from "./StyledGreeting";
import Itemsdata from "../data/ItemsData.json";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
        
    const {name} = useParams();

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
            const datos = data
            if(name) {
                setItems(datos.filter(item => item.forma === name));
            } else {
                setItems(datos);
            }
        })
        .catch(error => {
            alert(error);
        }).finally(() => {
            setLoading(false);
        })
    }, [name]);

    if(loading) return <Spinner />;
 
    return (  
        <>
        <StyledGreeting text={"Nuestra Colección"} />
        <ItemList items={items} />
        </>
    );
}
 
export default ItemListContainer;

