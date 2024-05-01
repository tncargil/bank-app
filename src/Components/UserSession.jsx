import React, { createContext, useContext, useState } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [accountNumber, setAccountNumber] = useState("");

    return (
        <SessionContext.Provider value={{ accountNumber, setAccountNumber }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => useContext(SessionContext);