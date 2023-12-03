import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../slices/authSlice";
import { useLogoutMutation } from "../apiSlices/userApiSlice";
import { Link, useNavigate } from "react-router-dom";
import AddressDrawerComponent from "../components/drawer/CustomDrawer";

import {
  NavbarCartLogo,
  NavbarHelpLogo,
  NavbarLogo,
  NavbarOffersLogo,
  NavbarProfileLogo,
  NavbarSearchLogo,
} from "../utils/svgs";
import { closeAddressDrawer, openAddressDrawer } from "../slices/headerSlice";
import AddressDrawerContent from "./auth/AddressDrawerContent";

const Header = () => {
  //misc
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isRestaurantDetailHeaderStick } = useSelector(
    (state) => state.restaurantDetailReducer
  );

  const { isOpenAddressDrawer } = useSelector((state) => state.headerReducer);

  //apis
  const [logOut] = useLogoutMutation();

  //func
  const handleLogout = async (e) => {
    try {
      const res = await logOut().unwrap();
      console.log(res, "res, from logoutttt");
      dispatch(logOutUser());
      navigate("/auth");
    } catch (error) {
      console.log(error, " errrrrrrr");
    }
  };

  const handleOpenAddressDrawer = () => {
    dispatch(openAddressDrawer());
  };

  const handleCloseAddressDrawer = () => {
    dispatch(closeAddressDrawer());
  };

  return (
    <>
      {/* header */}
      <header
        className="_76q0O"
        style={{ display: isRestaurantDetailHeaderStick ? "none" : "block" }}
      >
        <div className="global-nav">
          <div className="_1EuBh">
            <Link to="/" className="d9y3g" title="Swiggy">
              <NavbarLogo />
            </Link>
            <div className="_2z2N5">
              <span className="_1tcx6 _34oCb">
                <span className="_3odgy">Home</span>
              </span>
              <span className="_3HusE">
                2nd floor, 10th Cross, 9th Main, HBR layout, Hennur Gardens,
                Bengaluru, Karnataka 560043, India
              </span>
              <span
                className="icon-downArrow kVKTT"
                onClick={handleOpenAddressDrawer}
              ></span>
            </div>
            <ul className="_1JNGZ">
              <li className="_1fo6c">
                <div className="_1fmVk _30y3a">
                  <div>
                    <div className="_2CgXb">
                      <Link className="_1T-E4" to="/checkout">
                        <span className="_3yZyp _18ZFk">
                          <NavbarCartLogo />
                          <span className="_2vS77">2</span>
                        </span>
                        <span>Cart</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="_1fo6c">
                <div className="_1fmVk _30y3a">
                  <div>
                    <div className="_2CgXb">
                      <Link
                        className="_1T-E4 header_myAccount"
                        to="/my-account"
                      >
                        <span className="_3yZyp">
                          <NavbarProfileLogo />
                        </span>
                        <span className="_1qbcC">abdul</span>
                      </Link>
                      <div className="Dropdown">
                        <div className="Dropdowncontent">
                          <span>Profiles</span>
                          <span>Orders</span>
                          <span>Favourites</span>
                          <span onClick={handleLogout}>Logout</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="_1fo6c">
                <div className="_2CgXb">
                  <Link className="_1T-E4" to="/support">
                    <span className="_3yZyp">
                      <NavbarHelpLogo />
                    </span>
                    Help
                  </Link>
                </div>
              </li>
              <li className="_1fo6c">
                <div className="_2CgXb">
                  <Link className="_1T-E4" to="/offers-near-me">
                    <span className="_3yZyp">
                      <NavbarOffersLogo />
                    </span>
                    Offers<span className="PJaej">NEW</span>
                  </Link>
                </div>
              </li>
              <li className="_1fo6c">
                <div className="_2CgXb">
                  <a className="_1T-E4" href="/search">
                    <span className="_3yZyp">
                      <NavbarSearchLogo />
                    </span>
                    <span>Search</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* drawer */}
      <AddressDrawerComponent
        open={isOpenAddressDrawer}
        placement={"left"}
        onClose={handleCloseAddressDrawer}
        width={580}
      >
        <AddressDrawerContent />
      </AddressDrawerComponent>
    </>
  );
};

export default Header;
