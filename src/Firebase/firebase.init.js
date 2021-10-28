import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

const initializeAuthTravelants = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthTravelants;