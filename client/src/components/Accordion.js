import { useState } from "react";

// Single Item Component
const MenuItem = ({ item }) => {
  const { name, description } = item;
  return (
    <>
      <div className="item_description">
        {/* det_container */}
        <div className="detailsContainer">
          <div aria-hidden="true">
            <i
              className="icon-NonVeg"
              role="presentation"
              aria-hidden="true"
            ></i>
            <span className="bestseller_icon">
              <span className="styles_ribbonStar__1cZQq icon-star"></span>{" "}
              Bestseller
            </span>
          </div>
          <div className="itemName" aria-hidden="true">
            <h3>Butter Chicken Frankie Roll</h3>
          </div>

          <div className="itemPortionContainer" aria-hidden="true">
            <span className="itemPrice" aria-hidden="true">
              <span className="priceStrike">229</span>
              <span className="rupee">129</span>
            </span>
          </div>
          <div className="itemDesc" aria-hidden="true">
            Parotha wrapped with juicy chunks of butter chicken, fried and fresh
            onions &amp; Veggies with secret sauces. Chatpata, Spicy, Juicy,
            Crunchy - we have it all in our wraps and rolls.
          </div>
        </div>
        {/* img_container */}
        <div className="item_image">
          <div aria-hidden="true">
            <button
              className="styles_itemImage__3CsDL"
              aria-label="See more information about Butter Chicken Frankie Roll"
            >
              <img
                alt="Butter Chicken Frankie Roll"
                className="styles_itemImage__3CsDL"
                loading="lazy"
                width="256"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/7fa2425e48f6b87359666d3855f2b5b1"
              />
            </button>
          </div>
          <div className="addButton">
            <div className="main_buttonInner">
              <div className="text">ADD</div>
              <div className="plus">+</div>
              <div className="minus"></div>
              <div className="count">0</div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

// Accordion for Each Category
const MenuCategoryAccordion = ({ category }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="accordion_item">
      <button onClick={() => setIsOpen(!isOpen)} className="item_title">
        <h3 onClick={() => console.log(category, " ccc")}>
          {category?.categoryName} ({category?.items?.length})
        </h3>
        <span className={`icon-downArrow ${isOpen ? "rotate" : ""}`}>
          {/* {isOpen ? "▲" : "▼"} */}
        </span>
      </button>
      {isOpen && (
        <>
          {category.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </>
      )}
      <div className="main_border"></div>
    </div>
  );
};

// Main Accordion Component
export const Accordion = ({ categories }) => {
  return (
    <div className="prod_accordion">
      {categories.map((category) => (
        <MenuCategoryAccordion key={category._id} category={category} />
      ))}
    </div>
  );
};
