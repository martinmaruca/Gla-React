import StyledGreeting from "../ItemListContainer/StyledGreeting";
import React, { useState, useEffect } from "react";
import TiendaCards from "./TiendaCards";
import Spinner from "../Spinner/Spinner";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Tienda = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const productCollection = collection(db, "ItemCollection");
    getDocs(productCollection).then((res) =>
      setItems(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
    setLoading(false);
  }, [name]);

  if (loading) return <Spinner />;

  if (loading) return <Spinner />;

  return (
    <>
      <StyledGreeting text={"Nuestra Colección"} />
      <TiendaCards items={items} />
    </>
  );
};

export default Tienda;
