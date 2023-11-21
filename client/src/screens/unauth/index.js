import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import UnAuthMobileScreen from "./mobile";
import UnAuthWebScreen from "./web";
import { isMobile } from "../../utils/unauthHelper";
import { useTextCycle } from "../../hooks/useTextCycle";
import { auth } from "../../config/firebase.config";
//Store n api's Queries, Mutation
import {
  useLoginMutation,
  useRegisterUserMutation,
} from "../../apiSlices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";

const Index = () => {
  //misc
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const texts = ["Hungry?", "Unexpected guests?", "Cooking gone wrong?"];
  const currentText = useTextCycle(texts, 3000); // 1000ms = 1 second
  const { userInfo } = useSelector((state) => state.authReducer);
  const { name } = useSelector((state) => state.testReducer);
  //misc
  //useState
  const [open, setOpen] = useState(true);
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [isOtp, setIsOtp] = useState(false);
  const [user, setUser] = useState(null);
  const [signupFormData, setSignUpFormData] = useState({
    phone: "",
    name: "",
    email: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    phone: "",
    otp: "",
  });
  //queries n mutation
  const [registerUser, { isLoading: registerLoading, error: registerError }] =
    useRegisterUserMutation();

  const [login, { isLoading: loginLoading, error: loginError }] =
    useLoginMutation();
  //

  //func
  const showDrawer = useCallback((isTrue) => {
    setOpen(true);
    setIsLoginActive(isTrue);
  }, []);
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);
  // signup
  const handleSingUpForm = (e) => {
    setSignUpFormData({
      ...signupFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const { phone, email, name } = signupFormData;
    const formattedNumber = `+91${phone}`;

    try {
      const res = await registerUser({
        name,
        email,
        phone: formattedNumber,
      }).unwrap();
      console.log(res, " resss");
    } catch (err) {
      console.log(err, " errr");
      // toast.error(err?.data?.message || err.error);
    }
    console.log(signupFormData, " signupFormData");
  };

  ///login
  const handleLogInForm = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };
  //send OTP
  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved - you can proceed with OTP request
        },
      });

      const { phone } = loginFormData;
      const formattedNumber = `+91${phone}`;

      const confirmation = await signInWithPhoneNumber(
        auth,
        formattedNumber,
        recaptcha
      );
      if (confirmation?.verificationId) {
        console.log("Please check your phone, we send the OTP.");
        setIsOtp(true);
        setUser(confirmation);
      }
      console.log(confirmation, " conffff");
    } catch (error) {
      console.log(error, " errorr");
    }
  };

  const handleLogInContinue = (e) => {
    e.preventDefault();
    console.log(loginFormData, " loginFormData");
    sendOtp();
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const { otp } = loginFormData;
      const data = await user.confirm(otp);
      console.log(data, " succesully login dataaaa");
      // data.user.phoneNumber
      if (data.user.phoneNumber) {
        handleLogInSubmit(data.user.phoneNumber);
      }
    } catch (error) {
      console.log(error, " eerr from opttt");
    }
  };

  const handleLogInSubmit = async (phone) => {
    try {
      const res = await login({ phone }).unwrap();
      dispatch(setCredentials({ ...res }));
      setIsOtp(false);
      console.log(res, " ressssss");
    } catch (err) {
      console.log(err.data.message, " errrrrrrrr from login");
    }
  };
  // console.log(open, " opennnnn");
  return (
    <div>
      {/* <button onClick={() => console.log({ userInfo, name })}>CLick</button> */}
      <div id="recaptcha"></div>
      {isMobile() ? (
        <UnAuthMobileScreen
          loginFormData={loginFormData}
          handleLogInForm={handleLogInForm}
          isOtp={isOtp}
          handleLogInContinue={handleLogInContinue}
          handleVerifyOtp={handleVerifyOtp}
          handleLogInSubmit={handleLogInSubmit}
        />
      ) : (
        <UnAuthWebScreen
          currentText={currentText}
          open={open}
          //drawer
          showDrawer={showDrawer}
          onClose={onClose}
          isLoginActive={isLoginActive}
          //form
          signupFormData={signupFormData}
          handleSingUpForm={handleSingUpForm}
          handleSignUpSubmit={handleSignUpSubmit}
          loginFormData={loginFormData}
          handleLogInForm={handleLogInForm}
          handleLogInContinue={handleLogInContinue}
          handleVerifyOtp={handleVerifyOtp}
          handleLogInSubmit={handleLogInSubmit}
          isOtp={isOtp}
        />
      )}
    </div>
  );
};

export default Index;
