import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Box, Button } from "@material-ui/core";
import { auth } from "../Firebase";
const AuthGoogle = () => {
    const provider = new GoogleAuthProvider();
    const handler = async () => {
        await signInWithPopup(auth, provider)
            .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (credential !== null) {
                const token = credential.accessToken;
            }
            // The signed-in user info.
            const user = result.user;
            // ...}
        }).
            catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    };
    return (React.createElement(Box, { bgcolor: 'lightcoral' },
        React.createElement(Button, { onClick: () => {
                handler();
            } }, "Auth")));
};
export default AuthGoogle;
