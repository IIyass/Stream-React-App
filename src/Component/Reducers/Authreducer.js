
const INIT_STATE ={
    IsSignedIn :null,
    UserId:null
}



export default (state={INIT_STATE},action)=>{

    switch(action.type){
         case 'SIGN_IN': 
                           return {...state,IsSignedIn:true,UserId:action.payload}

         case 'SIGN_OUT': 
                                return {...state,IsSignedIn:false}

         default:
             return state;                       
    }};