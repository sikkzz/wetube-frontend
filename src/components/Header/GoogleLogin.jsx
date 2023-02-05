import { useRef } from "react";
import useScript from "../../hooks/useScript";
import jwt_decode from "jwt-decode";
import { postLoginToken } from "../../utils/postLoginToken";

const GoogleLogin = ({ isLogin, setIsLogin, userImg, setUserImg }) => {
  const googleSignInButton = useRef(null);
  const onGoogleSignIn = async (res) => {
    const { credential } = res;
    const results = await postLoginToken(credential, setIsLogin);
    setIsLogin(results);
    var userObject = jwt_decode(res.credential);
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
      width: "100",
    });
  });

  return <div ref={googleSignInButton}></div>;
};

export default GoogleLogin;
