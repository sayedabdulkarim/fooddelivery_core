import React, { useEffect } from "react";
import { Form, Row, Col, Input, InputNumber, Switch, Button } from "antd";
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
      <h3
        onClick={() =>
          console.log({ categoryName, restaurantMenuDetails }, " categoryName")
        }
        className="title"
      >
        <span>Selected Category</span> : {categoryName}
      </h3>
      {/*  */}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        {/* Row 1: id, name, and price */}
        <div className="form_item">
          <Row gutter={16}>
            {/* <Col span={6}>
              <Form.Item
                name="id"
                label="ID"
                rules={[
                  { required: true, message: "Please input the item ID" },
                ]}
              >
                <Input placeholder="Item ID" />
              </Form.Item>
            </Col> */}
            <Col span={6}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  { required: true, message: "Please input the item name" },
                ]}
              >
                <Input placeholder="Item Name" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="isVeg" label="Veg" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="inStock"
                label="In Stock"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: "Please input the price" }]}
              >
                <InputNumber
                  min={0}
                  placeholder="Price"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/* Row 2: Description */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                { required: true, message: "Please input the description" },
              ]}
            >
              <Input.TextArea rows={4} placeholder="Description" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Restaurant Image"
              name="imageUpload" // Make sure this matches your form model
              valuePropName="value"
              getValueFromEvent={(e) => e}
              rules={[{ required: true, message: "Please upload an image!" }]}
            >
              <ImageUploadInput />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit_btn">
            Add Item
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddMenu;
