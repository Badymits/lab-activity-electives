import { createContext, useState } from "react";


export const Context = createContext();

export const Provider = ({ children }) => {

    const [user, setUser] = useState(false)

    // to be used for login purposes
    let loginUser = (e) => {
        console.log(e)
        setUser(e)
    }

    // passing in values that can be accessed by the children 
    let contextData = {
        user: user,
        loginUser: loginUser
    }
    return (
        <Context.Provider value={contextData}>
            {children}
        </Context.Provider>
    )
}

