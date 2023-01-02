import { useRef, useState, useEffect } from "react";
import useScript from "../../hooks/useScript";
import jwt_decode from "jwt-decode";
import { postLoginToken } from "../../utils/postLoginToken";

const GoogleLogin = ({ text = "signin_with" }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userImg, setUserImg] = useState();
  const googleSignInButton = useRef(null);
  const onGoogleSignIn = async (res) => {
    const { credential } = res;
    // const results = await postLoginToken(credential, setIsLogin)
    console.log(res);
    console.log(res.credential);
    setIsLogin(true);
    var userObject = jwt_decode(res.credential);
    console.log(userObject);
    setUserImg(userObject.picture);
  };

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id:
        "648378971262-6vvq4ao4glm16ca6g5l8ltfslsf73p87.apps.googleusercontent.com",
      callback: onGoogleSignIn,
    });
    window.google.accounts.id.renderButton(googleSignInButton.current, {
      theme: "outline",
      size: "large",
      text,
      width: "100",
    });
  });

  return (
    <>
      {isLogin ? (
        <img src={userImg} className="wt-img-shadow" alt="user_picture" />
      ) : (
        <div ref={googleSignInButton}></div>
      )}
    </>
  );
};

export default GoogleLogin;
