"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const Reviews = () => {
  return (
    <section className="mb-20 max-w-[1200px] mx-auto px-3">
      <Slider {...settings}>
        {[1, 2, 3, 4]?.map((item, idx) => (
          <div key={idx} className="mb-10 ">
            <div className="p-6 border relative mb-8">
              <p>
                John has more than 40 years’ experience in the fast moving
                consumer goods industry in Zimbabwe. He is a member of the IMM.
                John is renowned for his strong leadership, and ability to
                deliver operationally to achieve improved business outcomes for
                our principals.
              </p>
              <div className="h-6 w-6 bg-white left-9 absolute -bottom-3 border-r-2 border-b rotate-45"/>
            </div>
            <div className="flex items-center gap-4">
              <figure>
                <Image
                  src="/images/John-de-Wet.jpg"
                  alt=""
                  width={100}
                  height={100}
                />
              </figure>
              <div className="text-lg">
                <h6 className="font-semibold text-blue-700">- JOHN DE WET </h6>
                <p className="uppercase text-gray-500">DIRECTOR</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Reviews;

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
};