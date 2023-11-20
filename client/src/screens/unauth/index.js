import React, { useCallback, useState } from "react";
import { isMobile } from "../../utils/unauthHelper";

import UnAuthMobileScreen from "./mobile";
import UnAuthWebScreen from "./web";
import { useTextCycle } from "../../hooks/useTextCycle";

const Index = () => {
  const texts = ["Hungry?", "Unexpected guests?", "Cooking gone wrong?"];
  const currentText = useTextCycle(texts, 3000); // 1000ms = 1 second
  //misc

  //useState
  //drawer
  const [open, setOpen] = useState(true);
  const [isLoginActive, setIsLoginActive] = useState(true);
  //form
  const [signupFormData, setSignUpFormData] = useState({
    phone: "",
    name: "",
    email: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    phone: "",
  });
  //func

  //drawer
  const showDrawer = useCallback((isTrue) => {
    setOpen(true);
    setIsLoginActive(isTrue);
    // console.log({ open });
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  //form data

  // signup
  const handleSingUpForm = (e) => {
    setSignUpFormData({
      ...signupFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSingnUpSubmit = (e) => {
    e.preventDefault();
    console.log(signupFormData, " signupFormData");
  };

  const handleLogInForm = (e) => {
    setLoginFormData({
      ...signupFormData,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(open, " opennnnn");
  return (
    <div>
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
          handleSingnUpSubmit={handleSingnUpSubmit}
          loginFormData={loginFormData}
          handleLogInForm={handleLogInForm}
        />
      )}
    </div>
  );
};

export default Index;
