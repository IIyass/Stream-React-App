import _ from 'lodash';



export default (state={},action)=>{

    switch(action.type){
case "Streamcreated" :
   return {...state,[action.payload.id]:action.playload};

case "allstream" :
    return{...state,..._.mapKeys(action.payload,"id")};
case "onestream" :
    return {...state,[action.payload.id]:action.payload};
case "editstream" :
   return {...state,[action.payload.id]:action.payload};
case "deletstream" :
    return _.omit(state,action.payload);
default :
    return state ;

    }





}