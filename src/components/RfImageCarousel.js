// RfImageCarousel.js

import Slider from "react-slick";
import RfData from "./RfData";

const RfImageCarousel = () => {
  const { imageUrls } = RfData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{
        textAlign: "left",
        height: "160px",
        border: "2px solid",
        borderRadius: "10px",
        borderStyle: "2px solid",
      }}
    >
      {/* <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </Slider> */}
    </div>
  );
};

export default RfImageCarousel;
