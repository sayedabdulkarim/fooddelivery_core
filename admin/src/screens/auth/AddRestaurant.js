import React from "react";
import { Form, Input, Button, Checkbox, Row, Col, Rate } from "antd";
import CuisineTagsInput from "../../utils/FormComponent/TagInput";

const RestaurantForm = ({ onSave }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values from form: ", values);
    // onSave(values);
  };

  return (
    <div className="add_restaurant_container">
      <h1 className="title">Add Restaurant</h1>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        {/*  */}
        <div className="form_item">
          <h3 className="section_title">Basic Info</h3>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="name"
                label="Restaurant Name"
                rules={[
                  {
                    required: true,
                    message: "Please input the restaurant name!",
                  },
                ]}
              >
                <Input placeholder="Restaurant Name" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="areaName" label="Area Name">
                <Input placeholder="Area Name" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="avgRating" label="Average Rating">
                <Rate allowHalf />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="costForTwo" label="Cost for Two">
                <Input placeholder="Cost for Two" />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/*  */}

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="cloudinaryImageId" label="Cloudinary Image ID">
              <Input placeholder="Cloudinary Image ID" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="costForTwo" label="Cost for Two">
              <Input placeholder="Cost for Two" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="cuisines" label="Cuisines (comma separated)">
              <Input placeholder="Cuisines" />
            </Form.Item>
          </Col>
        </Row>

        {/*  */}

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="type" label="Type">
              <Input placeholder="Type" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="isOpen" valuePropName="checked" label="Open">
              <Checkbox />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="veg" valuePropName="checked" label="Vegetarian">
              <Checkbox />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={6}>
            <Form.Item name="cuisines" label="Cuisines">
              <CuisineTagsInput />
            </Form.Item>
          </Col>
        </Row>
        {/* ...add more rows and cols for all fields... */}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Restaurant
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RestaurantForm;
