import React, { useState } from "react";
import { Button, Modal } from "antd";

const RestaurantMenuModal = ({ isShowMenu, setIsShowMenu }) => {
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
          <button
            class="MenuNav_item-"
            data-testid="nav-cid-Pav_Bhaji"
            aria-label="Category: Pav Bhaji; 9 items available."
          >
            <span class="itemTitle" aria-hidden="true">
              Pav Bhaji
            </span>
            <span class="itemCount" aria-hidden="true">
              9
            </span>
          </button>
        </div>
      </Modal>
    </>
  );
};
export default RestaurantMenuModal;
