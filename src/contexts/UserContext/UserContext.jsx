import { createContext, useState } from 'react';

const AuthProvider = (props) => {
    const [user, setUser] = useState({
        login:false,
    });

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};

export default AuthProvider;
export const UserContext = createContext();