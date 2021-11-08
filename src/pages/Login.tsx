import {
  getAuth,
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";

import React, { useState } from "react";

const Login = () => {
  const provider = new FacebookAuthProvider();
  const [user, setUser] = useState<any>("");

  const loginAction = (): any => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        const credential =
          FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
      })
      .catch((error) => {
        alert("失敗");
      });
  };

  const logout = (): Promise<void> => {
    return signOut(auth);
  };
  return (
    <div>
      <p onClick={loginAction}>ログイン</p>
      <p onClick={logout}>ログアウト</p>
    </div>
  );
};

export default Login;
