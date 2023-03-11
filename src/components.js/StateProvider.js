//creo el contexto para pasar las variables de reducer

import { useContext, useReducer, createContext } from "react";


export const StateContext = createContext();

export const StateProvider =({reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState) }>
        {children}
    </StateContext.Provider>
);

//permite consumir desde cualquier componente los cambios de estado

export const useStateValue = () => useContext(StateContext)