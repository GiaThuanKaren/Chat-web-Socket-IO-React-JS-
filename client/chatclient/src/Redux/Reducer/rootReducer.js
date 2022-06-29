const InitialState={
 idUSer:"",   
}


export const rootReducer=function(state= InitialState,action){
    switch(action.type){
        case "SetIdChat":{
            return {
                ...state,
                idUSer:action.payload
            }
        }
        default:{
            return state
        }
    }
}