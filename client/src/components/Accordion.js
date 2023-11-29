import { useState } from "react";

// Single Item Component
const MenuItem = ({ item }) => {
  // You can add more markup or style based on your design needs
  return (
    <div>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      {/* You can also display price, image, etc. */}
    </div>
  );
};

// Accordion for Each Category
const MenuCategoryAccordion = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {category.categoryName} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div>
          {category.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Accordion Component
export const Accordion = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <MenuCategoryAccordion key={category._id} category={category} />
      ))}
    </div>
  );
};
