import React from "react";

const Orders = () => {
  return (
    <div className="order_component">
      <div className="order_container">
        <div className="order_container_header">
          <div class="order_container_wrapper">
            <div class="edit_profile">Edit profile</div>
            <div class="userName"> Abdul</div>
            <div class="contact">
              <span className="phone">8296708008</span>
              <span className="email">sayedtest4747@gmail.com</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="order_container_content"></div>
      </div>
    </div>
  );
};

export default Orders;
