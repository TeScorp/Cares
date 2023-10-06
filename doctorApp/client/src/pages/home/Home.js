import React from "react";
import homeImg1 from "../../assets/images/homeImg1.png";
import icon1 from "../../assets/images/icon01.png";
import faqImg from "../../assets/images/faq-img.png";
import icon2 from "../../assets/images/icon02.png";
import icon3 from "../../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../../components/about/About";
import ServiceList from "../../components/services/ServiceList";
import DoctorList from "../../components/doctors/DoctorList";
import FaqList from "../../components/faq/FaqList";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Serving your health is our priority
                </h1>

                <p className="text_para textCor">
                  There is no more important than our good health, cause that’s
                  our principal capital asset for our good future
                </p>

                <button className="btn">Take an appointment</button>
              </div>

              {/* hero */}

              <div className="mt-[30px] lg:mt-[70] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36] leading-[56] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    01+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36] leading-[56] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    02+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36] leading-[56] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    89%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={homeImg1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a doctor
                </h2>
                <p className="text-[16px] leading-7 tect-textColor font-[400] mt-' text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From tehe lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a location
                </h2>
                <p className="text-[16px] leading-7 tect-textColor font-[400] mt-' text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From tehe lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon3} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book appointment
                </h2>
                <p className="text-[16px] leading-7 tect-textColor font-[400] mt-' text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From tehe lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      <section>
        <div className="container">
          <div className="xl:w-[470] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      {/* FAQ section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div claassName="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients.
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ section end */}

      {/** Patients speech  **/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/** Patients speech end  **/}
    </>
  );
};

export default Home;
