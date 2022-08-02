import StyledGreeting from "../ItemListContainer/StyledGreeting";
import ItemDetail from "../data/ItemDetail.json";
import { useState, useEffect } from "react";
import DetailCard from "../ItemDetailContainer/DetailCard";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "./DetailCard.css";


const Tienda = () => {
    let [items, setItems] = useState({});
    const param = useParams();
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {

        setLoading(true);
        let promiseItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(ItemDetail);
            }, 2000);
            setTimeout(() => {
                reject("Error");
            }, 2000);
        });
        promiseItems.then((data) => {
            const findItem = data.filter((item) => item.id === parseInt(param.id));
            setItems(findItem[0]);
        })
        .catch(error => {
            alert(error);
        }).finally(() => {
            setLoading(false);
        })
    },[param.id]);
    
    if(loading) return <Spinner />;
    
    return (  
        <>
        <StyledGreeting text={"Descripción del Producto"} />
        <DetailCard items={items}/>
        </>
    );
};

export default Tienda;
    