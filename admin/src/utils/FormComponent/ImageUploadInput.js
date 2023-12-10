import React, { useState } from "react";
import { Upload, Button, message, Image } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";

// Function to get Base64 from file object
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ImageUpload = ({ onImageUpload }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(""); // State for storing the preview image URL

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage || Upload.LIST_IGNORE;
  };

  const handleChange = async (info) => {
    setLoading(true);
    if (info.file.status === "done" && info.file.originFileObj) {
      try {
        const base64 = await getBase64(info.file.originFileObj);
        setLoading(false);
        setImageUrl(base64); // Update the imageUrl state to the base64 string
        onImageUpload(base64); // Pass the Base64 string to the parent component's state.
      } catch (error) {
        setLoading(false);
        message.error("File read failed: " + error.message);
      }
    } else if (info.file.status === "error") {
      setLoading(false);
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const dummyRequest = ({ onSuccess }) => {
    // Delay the success callback to ensure file object is available
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const uploadButton = (
    <div>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </div>
  );

  return (
    <div>
      <Upload
        name="avatar"
        // listType="picture-card"
        showUploadList={false}
        onChange={handleChange}
        customRequest={dummyRequest} // Prevent actual POST request
        beforeUpload={beforeUpload}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default ImageUpload;
