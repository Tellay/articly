import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const provider = new GithubAuthProvider();

export const GithubAuthLogin = (setUser, sessionStorage) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem("auth:token", token);
        return sessionStorage.setItem("auth:user", JSON.stringify(user));
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GithubAuthProvider.credentialFromError(error);
        return console.log(errorCode, errorMessage, credential);
    });
}

export const GithubAuthSignOut = (setUser, sessionStorage) => {
    sessionStorage.clear()
    return setUser(null);
}