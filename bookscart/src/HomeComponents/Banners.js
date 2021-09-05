import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Banners({ banners }) {
  const renderBanners = () => {
    return banners.map((image, index) => {
      return <img src={image.image_url} style={{ height: "216px" }}></img>;
    });
  };

  return (
    <div>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        swipeable={true}
        width={360}
      >
        {renderBanners()}
      </Carousel>
    </div>
  );
}
