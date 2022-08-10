import StyledGreeting from "../ItemListContainer/StyledGreeting";
import { useState, useEffect } from "react";
import DetailCard from "../ItemDetailContainer/DetailCard";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "./DetailCard.css";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const Tienda = () => {
  let [items, setItems] = useState({});
  const param = useParams();
  console.log(param);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const productDetail = doc(db, "ItemCollection", param.id);
    console.log(productDetail);
    getDoc(productDetail).then((res) =>
      setItems({ id: res.id, ...res.data() })
    );
    setLoading(false);
  }, [param.id]);

  if (loading) return <Spinner />;

  return (
    <>
      <StyledGreeting text={"Descripción del Producto"} />
      <DetailCard items={items} />
    </>
  );
};

export default Tienda;
