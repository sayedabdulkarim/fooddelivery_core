import React from "react";
import { useSelector } from "react-redux";

const OrderHeader = () => {
  const { userInfo } = useSelector((state) => state.authReducer);
  const {
    data: { email, phoneNumber, name },
  } = userInfo;
  return (
    <>
      <div className="order_container_header">
        <div className="order_container_wrapper">
          <div className="edit_profile" onClick={() => console.log(userInfo)}>
            Edit profile
          </div>
          <div className="userName">{name}</div>
          <div className="contact">
            <span className="phone">{phoneNumber}</span>
            <span className="email">{email}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHeader;
