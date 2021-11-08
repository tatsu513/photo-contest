import {
  signOut,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

import React, { useState } from "react";

const Login = () => {
  const provider = new FacebookAuthProvider();
  const [user, setUser] = useState<any>(undefined);
  const [accessToken, setAccessToken] = useState("");

  const signinWithFacebook = (): any => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        const credential =
          FacebookAuthProvider.credentialFromResult(result);
        setAccessToken(credential.accessToken);
      })
      .catch(() => {
        setUser(undefined);
      });
  };

  const logout = (): Promise<void> => {
    return signOut(auth);
  };
  return (
    <div>
      <p onClick={signinWithFacebook}>ログイン</p>
      <p onClick={logout}>ログアウト</p>
      <div style={{ marginTop: 36 }}>
        {user ? <p>OK</p> : <p>No</p>}
      </div>
    </div>
  );
};

export default Login;
