import React from "react";
import OrderHeader from "../../components/auth/Order/OrderHeader";
import OrderContent from "../../components/auth/Order/OrderContent";

const Orders = () => {
  return (
    <div className="order_component">
      <div className="order_container">
        <OrderHeader />
        {/*  */}
        <OrderContent />
      </div>
    </div>
  );
};

export default Orders;
