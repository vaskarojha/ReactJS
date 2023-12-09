const redux = require('redux')

const createStore = redux.createStore;

const PRODUCT_ORDER = 'PRODUCT_ORDER'
const PRODUCT_RESTOCK = 'PRODUCT_RESTOCK'

function orderProduct(){
    return{
        type:  PRODUCT_ORDER,
        payload: 1,
    }
}

function restockProduct(num = 1){
    return{
        type: PRODUCT_RESTOCK,
        payload: num,
    }
}

const initialState = {
    availableProduct: 10,
}

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case PRODUCT_ORDER:
            return{
                ...state,
                availableProduct : state.availableProduct-1
            }
        case PRODUCT_RESTOCK:
            return{
                ...state,
                availableProduct: state.availableProduct+ action.payload
            }
            default:
                return state
        }
    }

const store = createStore(reducer)
console.log('Initial state ', store.getState())

const unsubscribe = store.subscribe(()=>console.log("Update state ", store.getState()))

store.dispatch(orderProduct())
store.dispatch(orderProduct())

unsubscribe()


