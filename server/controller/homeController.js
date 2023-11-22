import asyncHandler from "express-async-handler";
// Models
import BestOffersModal from "../modals/home/bestOffers.js";
import TopRestaurantModal from "../modals/home/topRestaurants.js";

// @desc Get home page data for offers and restaurants
// @route GET /api/users/getHomeContent
// @access PRIVATE
const getHomePageData = asyncHandler(async (req, res) => {
  try {
    const offerList = await BestOffersModal.find(); // Fetch all documents from BestOffersModal
    const topRestaurantList = await TopRestaurantModal.find(); // Fetch all documents from TopRestaurantModal

    res.status(200).json({
      data: {
        offerList,
        topRestaurantList,
      },
      message: "done successfully",
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error fetching data" });
  }
});

export { getHomePageData };
