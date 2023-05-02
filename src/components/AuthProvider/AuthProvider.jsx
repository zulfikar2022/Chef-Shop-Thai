/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import { GoogleAuthProvider , GithubAuthProvider, signInWithPopup} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
// eslint-disable-next-line react-refresh/only-export-components
export const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser = () => {
    return signOut();
  };
  const loginWithGoogle = () => {
    return signInWithPopup(auth,googleProvider);
  };
  const loginWithGithub = () => {
    return signInWithPopup(auth,githubProvider);
  };

  const authInfo = {
    createUser,
    auth,
    user,
    setUser,
    loginUser,
    logoutUser,
    loginWithGoogle,
    loginWithGithub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
