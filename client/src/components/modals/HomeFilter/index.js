import React, { useState } from "react";
import FilterModal from "./FilterModal";

const HomeFilter = () => {
  //state
  const [isActiveOption, setIsActiveOption] = useState("Sort");

  return (
    <div>
      <FilterModal />
    </div>
  );
};

export default HomeFilter;
