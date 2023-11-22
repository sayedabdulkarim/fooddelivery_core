import React from "react";
import { Skeleton, Row, Col } from "antd";

const ShowSkeleton = ({ isLoading, numSkeletons = 40, columnsPerRow = 4 }) => {
  // Calculate span based on the number of columns per row
  const colSpan = 24 / columnsPerRow;

  // Create an array of Skeletons
  const skeletonGrid = Array.from({ length: numSkeletons }, (_, index) => (
    <Col key={index} span={colSpan}>
      <Skeleton loading={isLoading} active>
        <div style={{ marginBottom: 16 }}>Content</div>
      </Skeleton>
    </Col>
  ));

  return <Row gutter={[16, 16]}>{skeletonGrid}</Row>;
};

export default ShowSkeleton;
