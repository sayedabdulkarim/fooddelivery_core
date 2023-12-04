import React from "react";

const CartComponent = () => {
  return (
    <div className="_2sMsA">
      <div className="_1LDW5">
        <button className="_1mJeT">
          <span className="_1dcmE">
            <img
              className=""
              src={"imageUrl"}
              alt="img renderer"
              height="50"
              width="50"
            />
          </span>
          <span className="u1PgV">
            <div className="V7Usk">{"name"}</div>
            <div className="_2ofXa">{"location"}</div>
          </span>
        </button>
        {/* Other nested components can go here */}
        <div className="_1A195">{/* More nested components */}</div>
      </div>
      <div className="ZBf6d">
        <div>TO PAY</div>
        <div className="_3ZAW1">{"price"}</div>
      </div>
      {/* More components or divs */}
    </div>
  );
};

export default CartComponent;
