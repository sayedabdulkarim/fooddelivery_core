import React from "react";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { id } = useParams();

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
