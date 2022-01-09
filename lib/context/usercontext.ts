import React from "react";


export type userStateType = {
    username: string;
    role:string;
    token:string;
}

export  interface userActionType {
    type: string;
    payload: userStateType
}

export interface userContextType {
    userstate: userStateType
    userdispatch: React.Dispatch<userActionType>
}

export const defaultUserState : userStateType = {
    username : '',
    role: '',
    token: ''
}

export const defaultUserContextValue : userContextType = {
    userstate: defaultUserState,
    userdispatch: () => ({type : '', payload: defaultUserState})
}

export type userReducerType = (state:userStateType, action:userActionType) => userStateType


export const userReducer :userReducerType = (state: userStateType, action: userActionType) => {
    switch (action.type) {
        case 'login' :
            localStorage.setItem('user_token',action.payload.token)
            return action.payload
        case  'logout' :
            localStorage.removeItem('user_token')
            return defaultUserState
        default :
            return defaultUserState    
        
    }
}


export const userContext = React.createContext<userContextType | null >(defaultUserContextValue);


export const useUserContext = () => {
    const context = React.useContext(userContext)
    return context
}