import React, { useState } from "react";
import { AuthInfoIcon } from "../../utils/svgs";

const Login = () => {
  //state
  const [formData, setFormData] = useState({
    email_number: "",
    password: "",
  });

  //func
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, " formmm");
  };

  return (
    <div className="form_container">
      {/*  */}
      <div className="title_container">
        <div className="info_text">
          Enter a mobile number or restaurant ID to continue
        </div>
        <div className="info_icon">
          <AuthInfoIcon />
        </div>
      </div>
      {/*  */}
      <form onSubmit={handleSubmit}>
        {/* input */}
        <div className=" input_item">
          <input
            name="email_number"
            placeholder="Enter Email ID / Mobile number"
            autoCapitalize="sentences"
            autoComplete="on"
            autoCorrect="on"
            inputMode="decimal"
            spellCheck="true"
            className=""
            type="text"
            value={formData?.email_number}
            onChange={handleChange}
          />
        </div>
        {/*  */}
        <div className=" input_item">
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            autoCapitalize="sentences"
            autoComplete="on"
            autoCorrect="on"
            inputMode="decimal"
            spellCheck="true"
            className=""
            value={formData?.password}
            onChange={handleChange}
          />
        </div>
        {/* button */}
        <button className="submit_button" type="submit">
          <div className="btn_text">Continue</div>
        </button>
        {/*  */}
      </form>
    </div>
  );
};

export default Login;
