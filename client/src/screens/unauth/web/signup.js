import React from "react";

const Signup = () => {
  return (
    <div className="">
      <div>
        <div className="_3pYe-">
          <div className="_1Tg1D">Sign up</div>
          <div className="HXZeD"></div>
          <div className="_2r91t">
            or <span className="_3p4qh">login to your account</span>
          </div>
          <img
            className="jdo4W"
            imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            width="100"
            height="105"
            imageid=""
            alt="img renderer"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          />
        </div>
        <form>
          <div>
            <div className="_3Um38 _3lG1r">
              <input
                className="_381fS"
                type="tel"
                name="mobile"
                id="mobile"
                tabindex="1"
                maxlength="10"
                autocomplete="off"
                value=""
              />
              <div className="_2EeI1 _26LFr"></div>
              <label className="_1Cvlf _2tL9P " for="mobile">
                Phone number
              </label>
            </div>
            <div className="_3Um38 _3lG1r">
              <input
                className="_381fS"
                type="text"
                name="name"
                id="name"
                tabindex="2"
                autocomplete="off"
                value=""
              />
              <div className="_2EeI1"></div>
              <label className="_1Cvlf " for="name">
                Name
              </label>
            </div>
            <div className="_3Um38 _3lG1r">
              <input
                className="_381fS"
                type="email"
                name="email"
                id="email"
                tabindex="3"
                autocomplete="off"
                value=""
              />
              <div className="_2EeI1"></div>
              <label className="_1Cvlf " for="email">
                Email
              </label>
            </div>
          </div>
          <button className="_3GOZo">Have a referral code?</button>
          <div className="_25qBi _2-hTu">
            <a className="a-ayg">
              <input type="submit" style={{ display: "none" }} />
              CONTINUE
            </a>
          </div>
          <div className="_1FvHn">
            By creating an account, I accept the{" "}
            <a className="IBw2l" href="/terms-and-conditions">
              Terms &amp; Conditions
            </a>{" "}
            &amp;{" "}
            <a className="IBw2l" href="/privacy-policy">
              Privacy Policy
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
