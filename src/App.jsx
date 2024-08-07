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
    <div className=" border-2">Contact Us Section</div>
  );
}

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
