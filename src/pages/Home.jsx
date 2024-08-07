// IMAGES
// import uemLogoBackground from "../assets/PNG/uemBackgroundLogo.svg"
// import uemLogo from "../assets/PNG/uemLogo2-removebg-preview.png"
// import icassaLogo from "../assets/PNG/ICASSALogo.png"
// import locationIcon from "../assets/PNG/location_on.png"
// import downArrow from "../assets/PNG/downArrow.png"
// import image1 from "../assets/PNG/2023_Event_Images/2023-image1.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMPORTING IMAGES HERE :
import image1_2023 from "../assets/PNG/2023_Event_Images/2023-image1.jpg"
import image2_2023 from "../assets/PNG/2023_Event_Images/2023-image2.jpg"
import image3_2023 from "../assets/PNG/2023_Event_Images/2023-image3.jpg"
import image4_2023 from "../assets/PNG/2023_Event_Images/2023-image4.jpg"
import image5_2023 from "../assets/PNG/2023_Event_Images/2023-image5.jpg"
import image6_2023 from "../assets/PNG/2023_Event_Images/2023-image6.jpg"
import image7_2023 from "../assets/PNG/2023_Event_Images/2023-image7.jpg"
import image8_2023 from "../assets/PNG/2023_Event_Images/IMG-20230714-WA0008.jpg"



import React from "react";
import Slider from "react-slick";





export const Home = () => {




  // SETTINGS FOR THE CAROUSEL
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "homePageCarousel",
    autoplay:true,
    lazyLoad: true,
    autoplaySpeed: 5000,
    arrows:false,
  };



  return (
    <div>

      {/* WRAPPER OVER THE CAROUSOUL AND THE WRITING */}
      <div>



        {/* THE WRITING OVER THE CAROUSOUL AND THE BLACK OVERLAY*/}
        <div>

        </div>




        {/* THE CAROUSOUL */}
        <div>
          <Slider {...settings}>


            <div>
              <img src={image1_2023} alt="" />

            </div>


            <div>
              <img src={image2_2023} alt="" />

            </div>


            <div>
              <img src={image3_2023} alt="" />

            </div>


            <div>
              <img src={image4_2023} alt="" />

            </div>


            <div>

              <img src={image5_2023} alt="" />
            </div>


            <div>

              <img src={image6_2023} alt="" />
            </div>


            <div>

              <img src={image7_2023} alt="" />
            </div>


            <div>
              <img src={image8_2023} alt="" />

            </div>


          </Slider>

        </div>




      </div>







      {/* THE ABOUT US SECTION AND THE IMPORTANT DATES SECTION WRAPPER */}
      <div className=" flex justify-center 
      2xl:px-32">



        {/* THE ABOUT US SECTION  */}
        <div className=" flex flex-col 
        2xl:w-[50%]">

          {/* HEADING */}
          <h1 className=" text-5xl
            2xl:mb-8">About Us</h1>

          {/* PARAGRAPH */}
          <p className=" text-2xl">The vision behind organizing this conference is to provide an excellent forum for researchers, scientist and industrialist from interdisciplinary areas to showcase their current contribution in the recent area of Physical Sciences. The objectives of International Conference on Computational Applied Sciences and it’s Applications (ICCASA-2023) are to abreast the young minds from Institutes, Universities, Colleges and Industries across the country, with the latest advancements in the field of this area, and providing them an opportunity to share their recent researches and views in various fields of Physical Sciences and their applications for the ultimate benefit of the Society and Industry. The broad aim of the conference is to groom the young scientists’ minds to face the challenges of future for effective and efficient professional responsibilities. The conference will cover a wide range of topics in the form of plenary speakers, keynote speakers, invited talks & contributory papers presentations.UEM Jaipur was established in the year 2011 by Ordinance 11 of 2011 and Act No 5 of 2012 of Govt of Rajasthan. UEM Jaipur has achieved the awards of “Best Private University in North India” and “Best Emerging University in North India”.</p>
        </div>


        {/* THE IMPORTANT DATES SECTION */}
        <div>

        </div>

      </div>


    </div>
  )
}
