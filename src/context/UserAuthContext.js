import { createContext, useContext, useEffect, useState } from "react";
import {
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword

} from 'firebase/auth'
import { auth } from "../firebase";


const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    function signUp (email, password)
    {
        
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function setName(values){
        const {  name: displayName } = values;
        return updateProfile(auth.currentUser, { displayName })
    }
    function logOut(){
        return signOut(auth);
    }
    function signIn(email, password)
    {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const [user, setUser] = useState("");
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    

    return <userAuthContext.Provider value={{user,  logOut, signIn, signUp, setName }}> {children} </userAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(userAuthContext);
}













