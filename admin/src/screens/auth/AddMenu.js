import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AddMenu = () => {
  //misc
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const { categoryName, restaurantMenuDetails } = useSelector(
    (state) => state.menuReducer
  );

  useEffect(() => {
    if (!categoryName) {
      navigate("/");
    }
  }, [categoryName, navigate]);

  return (
    <div>
      <h1
        onClick={() =>
          console.log({ categoryName, restaurantMenuDetails }, " categoryName")
        }
      >
        AddMenu
      </h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
      <h1>AddMenu</h1>
    </div>
  );
};

export default AddMenu;
