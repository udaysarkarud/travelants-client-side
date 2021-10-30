import React, { createContext } from 'react';
import useFirebaseAuth from '../Hook/useFirebaseAuth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContextData = useFirebaseAuth();
    return (
        <AuthContext.Provider value={allContextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;