import React, { useState } from "react";
import FilterModal from "./FilterModal";

const HomeFilter = () => {
  //state
  const [isActiveOption, setIsActiveOption] = useState("Sort");

  //func
  const handleSetIsActiveOption = (val) => {
    setIsActiveOption(val);
  };

  return (
    <div>
      <FilterModal
        //selected filter option
        isActiveOption={isActiveOption}
        handleSetIsActiveOption={handleSetIsActiveOption}
        //
      />
    </div>
  );
};

export default HomeFilter;
