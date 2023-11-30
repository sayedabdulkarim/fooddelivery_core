import React, { useState } from "react";
import { Button, Modal } from "antd";

const RestaurantMenuModal = ({
  isShowMenu,
  setIsShowMenu,
  restaurantCategories,
}) => {
  const showModal = () => {
    setIsShowMenu(true);
  };
  const handleOk = () => {
    setIsShowMenu(false);
  };
  const handleCancel = () => {
    setIsShowMenu(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title=""
        open={isShowMenu}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName="restaurant_menu_modal"
        centered
        closable={false} // remove the close (X) button
        footer={null} // remove the footer with OK and Cancel buttons
      >
        <div class="menu_Nav_content">
          {restaurantCategories?.map((item) => {
            const { categoryName, items } = item;
            return (
              <button
                key={categoryName}
                onClick={() =>
                  console.log(
                    restaurantCategories,
                    "restaurantCategoriesrestaurantCategories"
                  )
                }
                class="MenuNav_item-"
                data-testid="nav-cid-Pav_Bhaji"
                aria-label="Category: Pav Bhaji; 9 items available."
              >
                <span class="itemTitle" aria-hidden="true">
                  {categoryName}
                </span>
                <span class="itemCount" aria-hidden="true">
                  {items?.length}
                </span>
              </button>
            );
          })}
        </div>
      </Modal>
    </>
  );
};
export default RestaurantMenuModal;
