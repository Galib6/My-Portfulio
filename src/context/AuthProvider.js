import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const [siteDetails, setSiteDetails] = useState()

    const authifo = {
        setSiteDetails,
        siteDetails
    }

    return (
        <AuthContext.Provider value={authifo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;