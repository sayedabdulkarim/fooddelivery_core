import asyncHandler from "express-async-handler"; //
//modals
import RestaurantDetailsModal from "../../modals/home/singleRestaurant.js";

// @desc    Get restaurant menu by restaurant ID
// @route   GET /api/admin/menu/:restaurantId
// @access  Private
const getRestaurantMenu = asyncHandler(async (req, res) => {
  const { restaurantId } = req.params;

  // Find the restaurant details with the given restaurantId
  const restaurantMenuDetails = await RestaurantDetailsModal.findOne({
    restaurantId,
  });

  if (restaurantMenuDetails) {
    // Return the menu to the client
    res.json({
      message: "Menu retrieved successfully",
      restaurantMenu: restaurantMenuDetails,
    });
  } else {
    // If the restaurant details are not found, send a 404 response
    res.status(404).json({
      message: "Restaurant menu not found",
    });
  }
});

// @desc    Add a new category to a restaurant
// @route   POST /api/admin/menucategory/:restaurantId/category
// @access  Private
const addCategoryToRestaurant = asyncHandler(async (req, res) => {
  const { restaurantId } = req.params;
  const { categoryName } = req.body;

  // Check if restaurant details already exist for the given restaurantId
  let restaurantDetails = await RestaurantDetailsModal.findOne({
    restaurantId,
  });

  // If restaurant details don't exist, create a new document
  if (!restaurantDetails) {
    restaurantDetails = new RestaurantDetailsModal({
      restaurantId,
      menu: [{ categoryName, items: [] }], // Create new category with an empty items array
    });
  } else {
    // If restaurant details do exist, check if the category already exists
    const existingCategory = restaurantDetails.menu.find(
      (category) => category.categoryName === categoryName
    );

    // If the category doesn't exist, add the new category
    if (!existingCategory) {
      restaurantDetails.menu.push({ categoryName, items: [] });
    } else {
      // If the category already exists, send back an error message
      return res.status(400).json({
        message: "Category already exists",
      });
    }
  }

  // Save changes to the database
  await restaurantDetails.save();

  res.status(201).json({
    message: "Category added successfully",
    menu: restaurantDetails.menu,
  });
});

// @desc    Add a new item to a category
// @route   POST /api/menu/:restaurantId/category/:categoryId/item
// @access  Private
const addItemToCategory = asyncHandler(async (req, res) => {
  const { restaurantId, categoryId } = req.params;
  const { name, description, price, imageId, inStock } = req.body;

  const restaurant = await RestaurantDetailsModal.findById(restaurantId);

  if (restaurant) {
    const category = restaurant.menu.id(categoryId);

    if (category) {
      const newItem = {
        id: new mongoose.Types.ObjectId(), // Generate new ID for the item
        name,
        description,
        imageId,
        inStock,
        price,
        // other item details
      };

      category.items.push(newItem);
      await restaurant.save();

      res.status(201).json({
        message: "Item added successfully",
        item: newItem,
      });
    } else {
      res.status(404);
      throw new Error("Category not found");
    }
  } else {
    res.status(404);
    throw new Error("Restaurant not found");
  }
});

export { addCategoryToRestaurant, addItemToCategory, getRestaurantMenu };
