import { legacy_createStore as createStore } from "redux";
const initialstate = {
    chifre:0
}
const reducer =(initialstate,action)=>{
    let newstate=initialstate;
    switch (action.type){
        
       default: return newstate;
    }
}
export default createStore(reducer,initialstate);