import StyledGreeting from "./StyledGreeting";
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Spinner from "../Spinner/Spinner";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        console.log(db);
        const productCollection = collection(db,"ItemCollection");
        const dataDocument = getDocs(productCollection)
           .then((snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setItems(data);
            console.log(data);
            setLoading(false);    
        }); 
        
    },[]);
    
    if(loading) return <Spinner />;

    return (
        <>
        <StyledGreeting text={"Nuestra Colección"} />
        <ItemList items={items} />
        </>
        );
}
 
export default ItemListContainer;