import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage || Upload.LIST_IGNORE;
  };

  const handleChange = async (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    // This assumes the file selection is done and the file is available
    if (info.file.originFileObj) {
      getBase64(info.file.originFileObj).then((base64) => {
        setLoading(false);
        onImageUpload(base64); // Pass the Base64 string to the parent component's state.
      });
    }
  };

  const dummyRequest = ({ file, onSuccess }) => {
    // Delay the success callback to ensure file object is available
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const uploadButton = (
    <div>
      {loading ? <PlusOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      onChange={handleChange}
      customRequest={dummyRequest} // Prevent actual POST request
      beforeUpload={beforeUpload}
    >
      {uploadButton}
    </Upload>
  );
};

export default ImageUpload;
