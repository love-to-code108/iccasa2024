// IMAGES
import uemLogoBackground from "../assets/PNG/uemBackgroundLogo.svg"
import uemLogo from "../assets/PNG/uemLogo2-removebg-preview.png"
import icassaLogo from "../assets/PNG/ICASSALogo.png"
import img2022_1 from "../assets/PNG/2022_Event_Images/2022-pic1.jpg"
import img2022_2 from "../assets/PNG/2022_Event_Images/2022-pic2.jpg"
import img2022_3 from "../assets/PNG/2022_Event_Images/2022-pic3.jpg"
import img2022_4 from "../assets/PNG/2022_Event_Images/2022-pic4.jpg"
import img2023_1 from "../assets/PNG/2023_Event_Images/2023-image1.jpg"
import img2023_2 from "../assets/PNG/2023_Event_Images/2023-image2.jpg"
import img2023_3 from "../assets/PNG/2023_Event_Images/2023-image3.jpg"
import img2023_4 from "../assets/PNG/2023_Event_Images/2023-image4.jpg"
import img2023_5 from "../assets/PNG/2023_Event_Images/2023-image5.jpg"
import img2023_6 from "../assets/PNG/2023_Event_Images/2023-image6.jpg"
import img2023_7 from "../assets/PNG/2023_Event_Images/2023-image7.jpg"
import img2023_8 from "../assets/PNG/2023_Event_Images/2023-image8.jpg"


// CAROUSEL
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'


export const Home = () => {


  return (
    <div className='Home-xxl' >

      {/* THE MAIN */}
      <div className="Home-main">

        {/* THE TOP BANNER */}
        <div className="Home-wrapper1-Banner_wrapper">



          {/* ICASSA LOGO */}
          <div>
            <img src={icassaLogo} alt="Logo of ICASSA" />
          </div>







          {/* UEM WRITING */}
          <div className="font-sora Home-wrapper1-2-div3">
            <h1>University of Engineering and Management Jaipur</h1>

            {/* UEM BACKGROUND LOGO */}
            <div className="Home-wrapper1-2-div1-Uem_background_logo">
              <img src={uemLogoBackground} alt="Uem Background logo" />
            </div>
          </div>



          {/* UEM LOGO */}
          <div>
            <img src={uemLogo} alt="" />
          </div>
        </div>




        {/* NAVBAR */}
        <div className="Home-wrapper2-Navbar font-sora">
          <div>Home</div>
          <div>About</div>
          <div>Scope</div>
          <div>Keynote Speaker</div>
          <div>Organizing Team</div>
          <div>Registration</div>
          <div>Gallery</div>
          <div>Conference Dates</div>
          <div>Editorial Team</div>
          <div>Contact Us</div>
        </div>




        {/* THE AUTO CHANGING IMAGE */}




        {/* WRITING OVER THE IMAGE */}




        {/* THE BOTTOM ARROW */}




      </div>

    </div>
  )
}
