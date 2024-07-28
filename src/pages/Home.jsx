// IMAGES
import uemLogoBackground from "../assets/PNG/uemBackgroundLogo.svg"
import uemLogo from "../assets/PNG/uemLogo2-removebg-preview.png"
import icassaLogo from "../assets/PNG/ICASSALogo.png"



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





        {/* THE AUTO CHANGING IMAGE */}




        {/* WRITING OVER THE IMAGE */}




        {/* THE BOTTOM ARROW */}




      </div>

    </div>
  )
}
