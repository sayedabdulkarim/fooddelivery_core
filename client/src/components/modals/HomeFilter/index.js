import React, { useState } from "react";
import FilterModal from "./FilterModal";

const HomeFilter = () => {
  //state
  const [isActiveOption, setIsActiveOption] = useState("Sort");

  const [filters, setFilters] = useState({
    sort: "",
    deliveryTime: [],
    cuisines: [],
    explore: [],
    rating: [],
    vegNonVeg: null,
    costForTwo: [],
    offers: null,
    // Add other filter categories as needed
  });

  //func
  const handleSetIsActiveOption = (val) => {
    setIsActiveOption(val);
  };

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => {
      // For categories that support multiple selections, like cuisines:
      if (Array.isArray(prevFilters[category])) {
        if (prevFilters[category].includes(value)) {
          // Deselect
          return {
            ...prevFilters,
            [category]: prevFilters[category].filter((item) => item !== value),
          };
        } else {
          // Select
          return {
            ...prevFilters,
            [category]: [...prevFilters[category], value],
          };
        }
      } else {
        // For categories that only allow a single selection:
        return {
          ...prevFilters,
          [category]: value,
        };
      }
    });
  };

  return (
    <div>
      <FilterModal
        //selected filter option
        isActiveOption={isActiveOption}
        handleSetIsActiveOption={handleSetIsActiveOption}
        //
        filters={filters}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default HomeFilter;
