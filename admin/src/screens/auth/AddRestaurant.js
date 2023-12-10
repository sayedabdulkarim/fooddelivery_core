import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Rate,
  DatePicker,
  TimePicker,
  Select,
} from "antd";
import CuisineTagsInput from "../../utils/FormComponent/TagInput";
import ImageUploadInput from "../../utils/FormComponent/ImageUploadInput";

const RestaurantForm = ({ onSave }) => {
  //misc
  const [form] = Form.useForm();
  const { Option } = Select;
  const format = "HH:mm"; // 24-hour format

  //start
  const [imageBase64, setImageBase64] = useState("");

  //func
  const onFinish = (values) => {
    // Format startTime and nextCloseTime using the 'HH:mm' format
    const formattedValues = {
      ...values,
      startTime: values.startTime
        ? values.startTime.format("HH:mm")
        : undefined,
      nextCloseTime: values.nextCloseTime
        ? values.nextCloseTime.format("HH:mm")
        : undefined,
      imageBase64,
    };

    console.log("Formatted values for submission:", formattedValues);
    // onSave(formattedValues);
  };

  console.log(imageBase64, " bbb");
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
        <div className="form_item">
          <h3 className="section_title">Availability</h3>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item name="startTime" label="Start Time">
                <TimePicker format={format} placeholder="Select Start Time" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="nextCloseTime" label="Next Close Time">
                <TimePicker
                  format={format}
                  placeholder="Select Next Close Time"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="isOpen" valuePropName="checked" label="Open">
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="isVeg"
                valuePropName="checked"
                label="Vegetarian"
              >
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
        </div>

        {/*  */}
        <div className="form_item">
          <h3 className="section_title">Service Level Agreement ( SLA )</h3>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="deliveryTime"
                label="Delivery Time (mins)"
                rules={[
                  {
                    required: true,
                    message: "Please enter estimated delivery time",
                  },
                ]}
              >
                <Input type="number" placeholder="e.g., 30" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="lastMileTravel"
                label="Last Mile Travel (km)"
                rules={[
                  {
                    required: true,
                    message: "Please enter last mile travel distance",
                  },
                ]}
              >
                <Input type="number" placeholder="e.g., 5" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="serviceability"
                label="Serviceability"
                rules={[
                  { required: true, message: "Please select serviceability" },
                ]}
              >
                <Select placeholder="Select serviceability">
                  <Option value="SERVICEABLE">Serviceable</Option>
                  <Option value="NOT_SERVICEABLE">Not Serviceable</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="iconType"
                label="Icon Type"
                rules={[
                  { required: true, message: "Please select an icon type" },
                ]}
              >
                <Select placeholder="Select Icon Type">
                  <Option value="ICON_TYPE_EMPTY">None</Option>
                  <Option value="ICON_TYPE_STANDARD">Standard</Option>
                  <Option value="ICON_TYPE_EXPRESS">Express</Option>
                  {/* Add more icon types as needed */}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </div>
        {/*  */}

        <Row gutter={16}>
          <Col span={8}>
            {/* <Form.Item name="cloudinaryImageId" label="Cloudinary Image ID">
              <Input placeholder="Cloudinary Image ID" />
            </Form.Item> */}

            <Form.Item label="Restaurant Image">
              <ImageUploadInput
                onImageUpload={(base64) => setImageBase64(base64)}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="costForTwo" label="Cost for Two">
              <Input placeholder="Cost for Two" />
            </Form.Item>
          </Col>
        </Row>

        {/*  */}

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
