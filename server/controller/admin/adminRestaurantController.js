import asyncHandler from "express-async-handler"; // Make sure you have express-async-handler installed
import AllRestaurants from "../models/restaurantModel"; // Replace with the actual path to your model

// @desc    Add a new restaurant
// @route   POST /api/restaurants
// @access  Private
const addRestaurant = asyncHandler(async (req, res) => {
  const {
    aggregatedDiscountInfo,
    adminUserId, // Make sure this is provided, or use req.user.id if the user is authenticated
    areaName,
    availability,
    avgRating,
    avgRatingString,
    badges,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    isOpen,
    name,
    sla,
    type,
    veg,
  } = req.body;

  // Create a new restaurant
  const restaurant = new AllRestaurants({
    aggregatedDiscountInfoV3: aggregatedDiscountInfo,
    areaName,
    availability,
    avgRating,
    avgRatingString,
    badges,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    isOpen,
    name,
    sla,
    type,
    veg,
    adminUserId,
  });

  // Save the restaurant to the database
  const createdRestaurant = await restaurant.save();

  res.status(201).json({
    message: "New restaurant added successfully",
    restaurant: createdRestaurant,
  });
});

export default addRestaurant;
