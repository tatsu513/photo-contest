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
    <div
      className="fb-login-button"
      data-width=""
      data-size="large"
      data-button-type="continue_with"
      data-layout="default"
      data-auto-logout-link="true"
      data-use-continue-as="true"
      data-scope="instagram_basic,show_pages_list"
    ></div>
  );
};

export default Login;
