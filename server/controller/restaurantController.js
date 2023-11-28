import asyncHandler from "express-async-handler";
// Models
import AllRestaurantsModal from "../modals/home/allRestaurants.js";
import SingleRestaurantModal from "../modals/home/singleRestaurant.js";

// @desc Get restaurants details as per Id
// @route GET /api/users/getRestaurantDetailById/id
// @access PRIVATE
const getRestaurantDetailById = asyncHandler(async (req, res) => {
  try {
    const restaurantId = req.params.id;

    // Fetch basic restaurant details
    const restaurantDetails = await AllRestaurantsModal.findById(restaurantId);
    if (!restaurantDetails) {
      return res.status(404).send({ message: "Restaurant not found" });
    }

    // Fetch menu details for the restaurant
    const menuDetails = await SingleRestaurantModal.findOne({ restaurantId });

    res.status(200).json({
      data: {
        ...restaurantDetails.toObject(),
        menu: menuDetails,
      },
      message: "Restaurant details fetched successfully",
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Error fetching restaurant details" });
  }
});

export { getRestaurantDetailById };
