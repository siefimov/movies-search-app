import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = (newUser, redirect) => {
        setUser(newUser);
        redirect();
    };
    const signOut = (redirect) => {
        setUser(null);
        redirect();
    };

    const value = { user, signIn, signOut }; // these three item will be available in all children components
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
