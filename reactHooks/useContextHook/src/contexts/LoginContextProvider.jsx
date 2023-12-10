import React, {createContext, useState} from "react";

export const LoginContext = createContext()

const  LoginContextProvider = ({children})=>{
    const [userDetail, setUserDetail] = useState(true);

    return (
        <LoginContext.Provider value={userDetail}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider