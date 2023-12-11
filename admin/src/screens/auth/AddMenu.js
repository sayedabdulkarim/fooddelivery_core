import React, { useEffect } from "react";
import { Form, Input, InputNumber, Switch, Button } from "antd";
import ImageUploadInput from "../../utils/FormComponent/ImageUploadInput";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AddMenu = () => {
  //misc
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const { categoryName, restaurantMenuDetails } = useSelector(
    (state) => state.menuReducer
  );

  //state
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    // onSubmit(values);
  };

  useEffect(() => {
    if (!categoryName) {
      navigate("/");
    }
  }, [categoryName, navigate]);

  return (
    <div className="menu_form_container">
      <h1
        onClick={() =>
          console.log({ categoryName, restaurantMenuDetails }, " categoryName")
        }
      >
        AddMenu : {categoryName}
      </h1>
      {/*  */}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        {/* Row 1: id, name, and price */}
        <Form.Item
          name="id"
          label="ID"
          rules={[{ required: true, message: "Please input the item ID" }]}
        >
          <Input placeholder="Item ID" />
        </Form.Item>

        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input the item name" }]}
        >
          <Input placeholder="Item Name" />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please input the price" }]}
        >
          <InputNumber min={0} placeholder="Price" />
        </Form.Item>

        {/* Row 2: Description */}
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please input the description" }]}
        >
          <Input.TextArea rows={4} placeholder="Description" />
        </Form.Item>

        {/* Row 3: Image Upload */}
        <Form.Item
          label="Restaurant Image"
          name="imageUpload" // Make sure this matches your form model
          valuePropName="value"
          getValueFromEvent={(e) => e}
          rules={[{ required: true, message: "Please upload an image!" }]}
        >
          <ImageUploadInput />
        </Form.Item>

        {/* In Stock Switch */}
        <Form.Item name="inStock" label="In Stock" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Item
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddMenu;
