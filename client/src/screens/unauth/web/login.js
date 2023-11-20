import React from "react";

const login = () => {
  return (
    <div className="_12S7_">
      <div className="">
        <div>
          <div className="_3pYe-">
            {/* <span className="_22fFW icon-close-thin"></span> */}
            <div className="_1Tg1D">Login</div>
            <div className="HXZeD"></div>
            <div className="_2r91t">
              or <span className="_3p4qh">create an account</span>
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
                  One Time Password
                </label>
              </div>
            </div>
            <div className="_25qBi _2-hTu">
              <span className="a-ayg">
                <input type="submit" style={{ display: "none" }} />
                Login
              </span>
            </div>
            <div className="_1FvHn">
              By clicking on Login, I accept the{" "}
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
    </div>
  );
};

export default login;
