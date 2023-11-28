import React from "react";
import { useLocation, useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { name, id } = useParams();
  //     const location = useLocation();
  //   const queryParams = new URLSearchParams(location.search);
  //   const id = queryParams.get("id");
  console.log({ name, id });
  return (
    <div>
      <h1>RestaurantDetails: {id}</h1>
      <h1>RestaurantDetails</h1>
      <h1>RestaurantDetails</h1>
      <h1>RestaurantDetails</h1>
      <h1>RestaurantDetails</h1>
      <h1>RestaurantDetails</h1>
      <h1>RestaurantDetails</h1>
      <h1>RestaurantDetails</h1>
      <h1>RestaurantDetails</h1>
      <h1>RestaurantDetails</h1>
    </div>
  );
};

export default RestaurantDetails;
