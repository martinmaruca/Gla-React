import StyledGreeting from "../ItemListContainer/StyledGreeting";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import TiendaCards from "./TiendaCards";
import Spinner from "../Spinner/Spinner";

const Tienda = () => {
  let [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <StyledGreeting text={"Nuestra Colección"} />
      <TiendaCards items={items} />
    </>
  );
};

export default Tienda;
