import asyncHandler from "express-async-handler"; //
//modals
import RestaurantDetails from "../../modals/home/singleRestaurant.js";
// @desc    Add a new category to a restaurant
// @route   POST /api/admin/menucategory/:restaurantId/category
// @access  Private
const addCategoryToRestaurant = asyncHandler(async (req, res) => {
  const { restaurantId } = req.params;
  const { categoryName } = req.body;

  // Check if restaurant details already exist for the given restaurantId
  let restaurantDetails = await RestaurantDetails.findOne({ restaurantId });

  // If restaurant details don't exist, create a new document
  if (!restaurantDetails) {
    restaurantDetails = new RestaurantDetails({
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
  const { itemName, description, price /*, other item details*/ } = req.body;

  const restaurant = await RestaurantDetails.findById(restaurantId);

  if (restaurant) {
    const category = restaurant.menu.id(categoryId);

    if (category) {
      const newItem = {
        id: new mongoose.Types.ObjectId(), // Generate new ID for the item
        name: itemName,
        description,
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

export { addCategoryToRestaurant, addItemToCategory };
