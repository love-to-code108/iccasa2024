import "./main.scss"
import { Home } from "./pages/Home"
import { KeynoteSpeaker } from "./pages/KeynoteSpeaker.jsx";
import { OrganizingTeam } from "./pages/OrganizingTeam.jsx";
import { Scope } from "./pages/Scope.jsx"
import { Registration } from "./pages/Registration.jsx"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// IMAGES
import uemLogoBackground from "./assets/PNG/uemBackgroundLogo.svg"
import uemLogo from "./assets/PNG/uemLogo2-removebg-preview.png"
import icassaLogo from "./assets/PNG/ICASSALogo.png"
import locationIcon from "./assets/PNG/location_on.png"
import facebook from "./assets/PNG/facebook.png"
import linkedin from "./assets/PNG/linkedin.png"
import twitter from "./assets/PNG/twitter.png"



function Banner() {


  return (


    // *********************************************************************
    // BANNER
    <div className="Banner-main">

      {/* ICCASA LOGO */}
      <div>
        <img className="
        2xl:h-[136px]
        xl:h-[130px]
        lg:h-[124px]
        " src={icassaLogo} alt="" />
      </div>





      {/* UEM TEXT */}
      <div className="Banner-wrapper-1-text_and_backgroundLogo_uem">
        <h1 className=" text-[#14008F]  font-bold 
        2xl:w-[43rem] 2xl:text-4xl
        xl:text-3xl xl:w-[36rem]
        lg:text-2xl lg:w-[29rem]">
          University Of Engineering and Management Jaipur</h1>


        {/* UEM BACKGROUND LOGO */}
        <div className="banner-uemLogoBackground">
          <img className="" src={uemLogoBackground} alt="" />
        </div>
      </div>



      {/* UEM LOGO */}
      <div>
        <img className="
        2xl:h-[136px]
        xl:h-[130px]
        lg:h-[124px]
        " src={uemLogo} alt="" />
      </div>


    </div>
  );
}







// ***************************************************************************
// NAVBAR
function Navbar() {


  return (
    <div className="Navbar-main 
    2xl:text-3xl
    xl:text-2xl
    lg:text-xl
    ">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/scope" className="nav-link">Scope</NavLink>
      <NavLink to="/Keynote_Speaker" className="nav-link">Keynote Speaker</NavLink>
      <NavLink to="/Organinzing_Team" className="nav-link">Organizing Team</NavLink>
      <NavLink to="/Registration" className="nav-link">Registration</NavLink>
      <NavLink to="/scope" className="nav-link">Contact Us</NavLink>
    </div>
  );
}






// ***************************************************************************
// CONTACT US
function ContactUs() {

  return (
    <div className="contactUs_section 
    xl:px-32 xl:text-xl ">


      {/* THE FIRST BLOCK CONTAINING THE HEADING PHONE NUMBER EMAIL AND UNIVERSITY LOCATION */}
      <div className=" flex flex-col h-[63%] mr-[18rem]">


        {/* CONTACT US HEADING */}
        <h1 className=" text-5xl font-bold xl:mb-4">Contact Us</h1>


        {/* PHONE NUMBER AND EMAIL */}
        <p>Phone No : +91 123456789</p>
        <p className=" xl:mb-2">email : email@uem.edu.in</p>




        {/* UEM JAIPUR LOCATION */}
        <a href="https://www.google.com/maps/place/University+of+Engineering+%26+Management+(UEM),+Jaipur/@27.2124649,75.6976676,17z/data=!3m1!4b1!4m6!3m5!1s0x396cffc30dacc2db:0xb78e5c340c935a95!8m2!3d27.2124649!4d75.7002425!16s%2Fm%2F0hhqh8d!5m1!1e2?entry=ttu" target="_blank" className=" flex justify-center items-center relative xl:right-2">

          <img className=" w-[1.5rem]" src={locationIcon} alt="" />
          <p>University of Engineering and Management Jaipur</p>

        </a>


      </div>








      {/* PREVIOUS WEBSITE DETAILS */}
      <div className=" h-[63%] flex flex-col mr-[7rem]">

        <h1 className="font-bold xl:text-3xl mb-4">Previous Websites</h1>


        <a href="https://iccasa2023.uem.edu.in/" target="_blank">2023 : Website Link</a>
        <a href="https://iccasa.uem.edu.in/" target="_blank">2022 : Website Link</a>
      </div>






      {/* GALLERY DEAILS */}
      <div className=" flex flex-col h-[63%] mr-[5rem]">
        <h1 className=" font-bold xl:text-3xl">Gallery</h1>
        <p>Memories of previous events</p>

      </div>




      {/* FACEBOOK LINKEDIN AND TWITTER */}
      <div className="flex items-start h-[63%] ">

        <img className="w-[2rem] h-[2rem] mr-2" src={facebook}></img>
        <img className="w-[2rem] h-[2rem] mr-2" src={linkedin}></img>
        <img className="w-[2rem] h-[2rem] mr-2" src={twitter}></img>
      </div>




    </div>
  );
}




// ***************************************************************************
// THE APP
function App() {

  return (
    <BrowserRouter>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scope" element={<Scope />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Organinzing_Team" element={<OrganizingTeam />} />
        <Route path="/Keynote_Speaker" element={<KeynoteSpeaker />} />
      </Routes>
      <ContactUs />
    </BrowserRouter>
  )
}

export default App
