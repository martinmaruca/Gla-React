import StyledGreeting from "./StyledGreeting";
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Spinner from "../Spinner/Spinner";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const productCollection = collection(db, "ItemCollection");

    if (name) {
      const queyFilter = query(
        productCollection,
        where("forma", "==", "Les Paul")
        /* where("forma", "==", "Soloist") */
      );
      getDocs(queyFilter).then((res) =>
        setItems(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(productCollection).then((res) =>
        setItems(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }

    setLoading(false);
  }, [name]);

  if (loading) return <Spinner />;

  return (
    <>
      <StyledGreeting text={"Nuestra Colección"} />
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
