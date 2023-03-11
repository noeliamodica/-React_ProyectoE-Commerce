//reducer tiene el initialState donde tengo una constante (basket) que sera un array vacio 
//y se ira completando cuando le demos agregar al carrito

export const initialState = {
    basket: []
}

//que tipo de acciones tenemos que escuchar dentro del reducer

export const actionTypes ={
    ADD_TO_BASKET: "ADD_TO_BASKET"
}



const reducer = (state, action) =>{
    console.log (action);
    switch(action.type){
        case "ADD_TO_BASKET": 
    return{
        ...state,
        basket: [...state.basket, action.item]
    }
    default: 
    return state;
    }
    
}

export default reducer