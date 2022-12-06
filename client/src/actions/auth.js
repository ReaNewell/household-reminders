import { auth } from '../firebase/firebase';

// LOGIN
export const login = (uid) => ({
    type: "LOGIN",
    uid
});
export const startLoginWithEmail = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
    // .catch((error) => {
    //     if (error) {
    //         return error.message;
    //     } else {
    //         return "Good to go!"
    //     }
    // })
};

// LOGOUT
export const logout = () => ({
    type: "LOGOUT"
})
export const startLogout = () => {
    return auth.signOut();
};


// SIGNUP
export const signup = () => ({
    type: "SIGNUP"
});
export const startSignUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        return auth.signInWithEmailAndPassword(email, password);
    })
    .then(() => {
        console.log("Signed In!");
    })
};