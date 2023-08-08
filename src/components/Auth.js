import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import User from "./User";

function Auth() {
  const [userData, setUserData] = useState("");

  if (userData) {
    window.localStorage.setItem("name", userData.name);
    window.localStorage.setItem("email", userData.email);
    window.localStorage.setItem("picture", userData.picture);

    return <User info={userData} />;
  }

  let name = window.localStorage.getItem("name");
  let email = window.localStorage.getItem("email");
  let picture = window.localStorage.getItem("picture");

  // if you have name, email, picture in localStorage.
  // It means you are already logged in.
  if (name && email && picture) {
    setUserData({ name: name, email: email, picture: picture }); // Bad Way
    // setUserData({ name, email, picture });  Good Way
  }

  return (
    <>
      <GoogleOAuthProvider clientId="328551018942-j35sd92jakctgvpbf0uqn2ip2g4r37v3.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            let token = credentialResponse.credential;
            var decoded = jwt_decode(token);
            // console.log(decoded);
            setUserData(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}

export default Auth;