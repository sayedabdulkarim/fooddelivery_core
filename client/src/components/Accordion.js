import React, { useState } from "react";

// Accordion Content Component
const AccordionContent = ({ menus }) => {
  return (
    <ul>
      {menus.map((menu, index) => (
        <li key={index}>{menu.name}</li>
      ))}
    </ul>
  );
};

// Accordion Section Component
const AccordionSection = ({ title, count, menus }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {title} ({count}) {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && <AccordionContent menus={menus} />}
    </div>
  );
};

// Accordion Component
const Accordion = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionSection
          key={index}
          title={item.title}
          count={item.menus.length}
          menus={item.menus}
        />
      ))}
    </div>
  );
};

export { Accordion };
