import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "./firebase.init";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);



  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  
  };
  const signInUser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const getRegisterUserInfo=(profile)=>{
    return updateProfile(auth.currentUser,profile);
  }

  const logOut=()=>{
    return signOut(auth);
  }

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false);
    })
    return ()=>{
      unSubscribe();
    } 
  },[])

  const authInfo = {
    user,
    loading,
    setUser,
    signUpUser,
    signInUser,
    getRegisterUserInfo,
    logOut,
  };

  return <AuthContext value={authInfo}>
    {children}
  </AuthContext>;
};

export default AuthProvider;
