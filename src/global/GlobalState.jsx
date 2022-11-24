import React from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import axios from "axios";

export const GlobalState = (props) => {

    const [users, setUsers] = React.useState([])

    const data = {users}

    return(

        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}