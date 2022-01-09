import React ,{FC, useEffect, useReducer} from "react";
import { 
    defaultUserState, 
    userActionType, 
    userContext, 
    userContextType, 
    userReducer, 
    userStateType
} from "../../lib/context/usercontext";


type reducerType<S,A> = (state:S ,action:A) => S  

export const AppWrapper : FC<{}> = ({...props}) => {
    const [user,dispatch] = useReducer<reducerType<userStateType,userActionType>>(userReducer,defaultUserState) 
    
    const userContextValue : userContextType = {
        userstate: user,
        userdispatch: dispatch
    }
    
    useEffect(()=>{
        
    },[])
    return (
        <userContext.Provider value={userContextValue}>
          {props.children}  
        </userContext.Provider>
    )
}