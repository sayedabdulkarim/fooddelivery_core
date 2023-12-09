import React, { useState } from "react";

const RestaurantForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    areaName: "",
    avgRating: "",
    cloudinaryImageId: "",
    costForTwo: "",
    cuisines: [""],
    isOpen: false,
    name: "",
    type: "",
    veg: false,
    sla: {
      deliveryTime: "",
      lastMileTravel: "",
      serviceability: "",
      slaString: "",
      lastMileTravelString: "",
      iconType: "",
    },
    availability: {
      nextCloseTime: "",
      opened: false,
    },
    aggregatedDiscountInfoV3: {
      header: "",
      subHeader: "",
      discountTag: "",
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes(".")) {
      const [key, subkey] = name.split(".");
      setFormData((prevFormData) => ({
        ...prevFormData,
        [key]: {
          ...prevFormData[key],
          [subkey]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Restaurant Name"
        required
      />
      <input
        name="areaName"
        value={formData.areaName}
        onChange={handleChange}
        placeholder="Area Name"
      />
      <input
        type="number"
        name="avgRating"
        value={formData.avgRating}
        onChange={handleChange}
        placeholder="Average Rating"
      />
      <input
        name="cloudinaryImageId"
        value={formData.cloudinaryImageId}
        onChange={handleChange}
        placeholder="Cloudinary Image ID"
      />
      <input
        name="costForTwo"
        value={formData.costForTwo}
        onChange={handleChange}
        placeholder="Cost for Two"
      />
      <input
        name="cuisines"
        value={formData.cuisines}
        onChange={handleChange}
        placeholder="Cuisines (comma separated)"
      />
      <input
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Type"
      />
      <label>
        Open:
        <input
          type="checkbox"
          name="isOpen"
          checked={formData.isOpen}
          onChange={handleChange}
        />
      </label>
      <label>
        Vegetarian:
        <input
          type="checkbox"
          name="veg"
          checked={formData.veg}
          onChange={handleChange}
        />
      </label>

      {/* SLA Schema Inputs */}
      <input
        name="sla.deliveryTime"
        value={formData.sla.deliveryTime}
        onChange={handleChange}
        placeholder="SLA Delivery Time"
        type="number"
      />
      {/* ...similarly add other inputs for all fields in slaSchema... */}

      {/* Availability Schema Inputs */}
      <input
        name="availability.nextCloseTime"
        value={formData.availability.nextCloseTime}
        onChange={handleChange}
        placeholder="Next Close Time"
      />
      <label>
        Availability Open:
        <input
          type="checkbox"
          name="availability.opened"
          checked={formData.availability.opened}
          onChange={handleChange}
        />
      </label>

      {/* Aggregated Discount Info Inputs */}
      <input
        name="aggregatedDiscountInfoV3.header"
        value={formData.aggregatedDiscountInfoV3.header}
        onChange={handleChange}
        placeholder="Discount Info Header"
      />
      {/* ...similarly add other inputs for all fields in aggregatedDiscountInfoV3Schema... */}

      <button type="submit">Save Restaurant</button>
    </form>
  );
};

export default RestaurantForm;
