import React, { createContext, useEffect, useState } from 'react';

import { GithubAuthLogin, GithubAuthSignOut } from "../auth/GithubAuth";

import "../auth/firebase";

export const AuthGithubContext = createContext({});

function AuthGithubProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadStorageAuth = () => {
            const sessionToken = sessionStorage.getItem("auth:token");
            const sessionUser = JSON.parse(sessionStorage.getItem("auth:user"));

            if(sessionToken && sessionUser) {
                setUser(sessionUser);
            }
        }

        loadStorageAuth();
    }, [])

    const GithubLogin = () => {
        GithubAuthLogin(setUser, sessionStorage);
    }

    const GithubSignout = () => {
        GithubAuthSignOut(setUser, sessionStorage);
    }

    return (
        <AuthGithubContext.Provider
            value={{GithubLogin, GithubSignout, signed: !!user, user }}
        >
            {children}
        </AuthGithubContext.Provider>
    )
}

export default AuthGithubProvider;