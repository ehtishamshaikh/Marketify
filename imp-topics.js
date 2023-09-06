import axios from "axios";
import { useReducer, useState } from "react";
import { ThemeProvider } from "styled-components";

useState(initial state)

props

context API:
create //createContext
provide //name.Provider
consume //use arrow function inside name.Consumer - 

axios: //upgraded version of fetch API
Response= await axios.get(url)


//UseReducer start

initialState = 0;

const [state, dispatch] = useReducer(reducer, initialState)
//used to manage more states
const reducer = (state, action) => {

    if (action.type === "INCREMENT") {
        return state + 1;
    }

    return state;
}

onclick(()=> dispatch({type: "INCREMENT"}))

//UseReducer end

