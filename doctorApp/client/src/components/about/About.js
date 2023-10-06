import React from "react";
import aboutImg from "../../assets/images/about.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]"></div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670] order-2">
            <h2 className="heading">Proud the best ones</h2>
            <p className="text__para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="text__para mt-[30px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>

            <Link to="/">
              <button className="btn">See more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;
