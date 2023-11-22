import React from "react";
import useImageCarousel from "../../../hooks/useImageCarousel"; // Update with the correct path

const imagedata = [
  {
    name: "Alabama",
    abbreviation: "AL",
    image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/bdc54e63721168abc2f98c358c3a6d94`,
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/fbc34ac620431050364365ad2c589909`,
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/0fc2086fd43ab60b9d1e7606934efd00`,
  },
  {
    name: "Alabama",
    abbreviation: "AL",
    image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/bdc54e63721168abc2f98c358c3a6d94`,
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/fbc34ac620431050364365ad2c589909`,
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/0fc2086fd43ab60b9d1e7606934efd00`,
  },
  {
    name: "Alabama",
    abbreviation: "AL",
    image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/bdc54e63721168abc2f98c358c3a6d94`,
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/fbc34ac620431050364365ad2c589909`,
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/0fc2086fd43ab60b9d1e7606934efd00`,
  },
];

const Imagesection = () => {
  const {
    carouselViewportRef,
    moveLeft,
    moveRight,
    images,
    isAtStart,
    isAtEnd,
  } = useImageCarousel(imagedata);

  return (
    <div className="home_best_offers">
      <div className="sc-esYiGF cfAhyi">
        <div className="sc-fXSgeo FedBt">
          <h2 className="sc-aXZVg fRsBsl title">Best offers for you</h2>
          <div className="sc-aXZVg dtXMSY"></div>
        </div>
      </div>

      <div className="Imagesection">
        <div className={"Imagesdiv"}>
          <button
            onClick={moveLeft}
            style={{ opacity: isAtStart ? "0.5" : "" }}
            disabled={isAtStart}
          >
            LEFT
          </button>
          <button onClick={moveRight}>RIGHT</button>
          <ul ref={carouselViewportRef}>
            {images.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Imagesection;
