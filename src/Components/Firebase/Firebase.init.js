import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseInintilization = () => {
    initializeApp(firebaseConfig);
}
export default firebaseInintilization;