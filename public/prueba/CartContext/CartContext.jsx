/* import React, {createContext, useState} from "react";

export const Context = createContext();

const ContextProvider = (props) => {
    const [amountItems, setAmountItems] = useState(0);
    return (
        <Context.Provider value={{amountItems, setAmountItems}}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider; */