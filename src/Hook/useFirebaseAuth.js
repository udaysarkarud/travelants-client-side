import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthTravelants from "../Firebase/firebase.init"

initializeAuthTravelants()

const useFirebaseAuth = () => {
    const [userProfile, setUserProfile] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [allError, setAllError] = useState('')
    const [singupError, setSingupError] = useState('')


    /* Google Provider and Auth */
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    /* google Sign in  */
    const handelGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)

    }

    /* google Sign Out  */
    const handelSignOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUserProfile({})
        }).catch((error) => {
            console.log(error.message)
        }).finally(() => {
            setIsLoading(false)
        })

    }

    /* Update useProfile State  */
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserProfile(user)
            } else {
                setUserProfile({})
            }
            setIsLoading(false)
        });

        return () => unsubscribed;
    }, [])

    return {
        userProfile,
        isLoading,
        allError,
        setIsLoading,
        setAllError,
        handelSignOut,
        handelGoogleLogin
    }
}

export default useFirebaseAuth;