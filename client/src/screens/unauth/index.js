import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "../../utils/unauthHelper";
import { useTextCycle } from "../../hooks/useTextCycle";
import UnAuthMobileScreen from "./mobile";
import UnAuthWebScreen from "./web";

//Store n api's Queries, Mutation
import { useRegisterUserMutation } from "../../apiSlices/userApiSlice";
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
  const [signupFormData, setSignUpFormData] = useState({
    phone: "",
    name: "",
    email: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    phone: "",
  });
  //queries n mutation
  const [registerUser, { isLoading: registerLoading, error: registerError }] =
    useRegisterUserMutation();

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

    try {
      const res = await registerUser({ name, email, phone }).unwrap();
      console.log(res, " resss");
      // dispatch(setCredentials({ ...res }));
      // navigate("/");
    } catch (err) {
      console.log(err, " errr");
      // toast.error(err?.data?.message || err.error);
    }
    console.log(signupFormData, " signupFormData");
  };
  ///
  const handleLogInForm = (e) => {
    setLoginFormData({
      ...signupFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogInSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData, " loginFormData");
  };
  // console.log(open, " opennnnn");
  return (
    <div>
      <button onClick={() => console.log({ userInfo, name })}>CLick</button>
      {isMobile() ? (
        <UnAuthMobileScreen />
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
        />
      )}
    </div>
  );
};

export default Index;
