import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CategoryModal from "./CategoryModal";
import {
  setMenuCategory,
  setMenuCategoryModal,
} from "../../../../slices/menuSlice";

const Index = () => {
  //misc
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const { categoryModal } = useSelector((state) => state.menuReducer);

  // State for modal visibility
  //   const [modalVisible, setModalVisible] = useState(false);

  // State for category list - This should ideally come from your API/backend
  const [categoryList, setCategoryList] = useState([
    "Appetizers",
    "Main Course",
    "Desserts",
  ]);

  // Handler for adding a new category - This should make an API call to save the category
  const handleAddCategory = async (newCategoryName) => {
    console.log("Adding new category:", newCategoryName);
    // Here you would typically make an API call to your backend to add the new category
    // For demonstration, we're just adding it to the local state
    setCategoryList((prev) => [...prev, newCategoryName]);
    dispatch(setMenuCategory(newCategoryName));
    navigate("/addmenu");
    // dispatch(setMenuCategoryModal(false));
  };

  // Handler for selecting an existing category - This might be used to filter items or similar
  const handleSelectCategory = (selectedCategory) => {
    console.log("Selected category:", selectedCategory);
    dispatch(setMenuCategory(selectedCategory));
    navigate("/addmenu");

    // Perform actions based on the selected category
    // setModalVisible(false); // Close the modal after selection
    // dispatch(setMenuCategoryModal(false));
  };

  // Handler to open the modal
  // const openModal = () => {
  //       dispatch(setMenuCategoryModal(true))
  //     // setModalVisible(true);
  //   };

  return (
    <div>
      {/* <button onClick={openModal}>Add or Select Category</button> */}
      <CategoryModal
        visible={categoryModal}
        onAddCategory={handleAddCategory}
        onSelectCategory={handleSelectCategory}
        categories={categoryList}
        // onClose={() => setModalVisible(false)}
        onClose={() => dispatch(setMenuCategoryModal(false))}
      />
    </div>
  );
};

export default Index;
