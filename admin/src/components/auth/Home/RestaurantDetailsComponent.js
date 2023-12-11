import React from "react";
import { Rate, Tag, Card } from "antd";
// import 'antd/dist/antd.css'; // Ensure you import Ant Design CSS

const RestaurantDetailsComponent = ({ restaurantDetails }) => {
  if (!restaurantDetails) {
    return <div>Loading restaurant details...</div>;
  }

  const {
    _id,
    aggregatedDiscountInfoV3,
    areaName,
    availability,
    avgRating,
    avgRatingString,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    name,
    sla,
    type,
    adminUserId,
  } = restaurantDetails;

  // Add proper image URL handling here
  const imageUrl =
    cloudinaryImageId ||
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6";

  return (
    <div className="restaurant_detail_container">
      <Card className="left_section" bordered={false}>
        <img src={imageUrl} alt={name} className="restaurant_image" />
        <h2>{name}</h2>
        <Rate allowHalf defaultValue={avgRating} disabled />
        <p>{avgRatingString} out of 5</p>
        <p>Type: {type}</p>
        <p>Area: {areaName}</p>
      </Card>
      <Card className="right_section" bordered={false}>
        <h3>Details</h3>
        <p>Cost for Two: {costForTwo}</p>
        <p>Availability: {availability.isOpen ? "Open" : "Closed"}</p>
        <p>Delivery Time: {sla.deliveryTime} mins</p>
        <p>Last Mile Travel: {sla.lastMileTravel} km</p>
        <p>
          Cuisines:{" "}
          {cuisines.map((cuisine) => (
            <Tag key={cuisine}>{cuisine}</Tag>
          ))}
        </p>
        {aggregatedDiscountInfoV3 && (
          <Card title="Discounts" size="small">
            <p>{aggregatedDiscountInfoV3.header}</p>
            <p>{aggregatedDiscountInfoV3.subHeader}</p>
          </Card>
        )}
      </Card>
    </div>
  );
};

export default RestaurantDetailsComponent;
