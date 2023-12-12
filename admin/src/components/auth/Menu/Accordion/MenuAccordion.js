import React from "react";
import { Collapse, Card } from "antd";

const { Panel } = Collapse;

// const genExtra = () => (
//   // You can add extra nodes/icons here if you want
// );

const getImageUrl = (imageId) => {
  // Assuming imageId that is not base64 starts with a character
  return imageId.match(/^[A-Za-z]/)
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`
    : imageId;
};

const MenuAccordion = ({ menuData }) => {
  return (
    <Collapse accordion>
      {menuData.map((category) => (
        <Panel
          header={`${category.categoryName} (${category.items.length})`}
          key={category._id}
          //   extra={genExtra()}
        >
          {category.items.map((item) => (
            <Card
              key={item._id}
              hoverable
              style={{ width: 240, marginBottom: 16 }}
              cover={<img alt={item.name} src={getImageUrl(item.imageId)} />}
            >
              <Card.Meta title={item.name} description={item.description} />
              {/* Add more item details here */}
            </Card>
          ))}
        </Panel>
      ))}
    </Collapse>
  );
};

export default MenuAccordion;
