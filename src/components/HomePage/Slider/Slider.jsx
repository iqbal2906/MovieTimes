import React, { useState, useEffect } from "react";
import { fetchTrending } from "../../../service";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";

const Slider = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setTrending(await fetchTrending());
    };

    fetchApi();
  }, []);

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={2000}
      centerMode
      className="slider__container"
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {/* <div className="slider__container"> */}
      {trending && trending.map((trend) => <Card key={trend.id} {...trend} />)}
      {/* </div> */}
    </Carousel>
  );
};

export default Slider;
