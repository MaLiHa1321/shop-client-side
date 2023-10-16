import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app)

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
   
    const [user, setUser] = useState(null)

    // create user
    const CreateUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userInfo ={
        user,
        CreateUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;