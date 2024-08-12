import { KeynoteSpeaker_card_component } from "../components/KeynoteSpeaker_card_component"

// IMAGE IMPORTS
import DrAbhijitKumarDas from "../assets/JPG/keynoteSpeaker/Dr. Abhijit Kumar Das.jpg"



export const KeynoteSpeaker = () => {
  return (
    <div className=' lg:w-[100%] lg:h-[40rem] flex justify-center items-center '>
      <div>

        {/* DR ABHIJIT KUMAR DAS */}
        <KeynoteSpeaker_card_component image={DrAbhijitKumarDas} bold="Prof. (Dr.) Abhijit Kumar Das" line1="Senior Professor" line2="School of Mathematical &amp; Computational Sciences" line3="Indian Association for the Cultivation of Science, Kolkata" />

        {/* DR RITU AGARWAL */}
        <KeynoteSpeaker_card_component image={DrAbhijitKumarDas} bold="Prof. (Dr.) Ritu Agarwal" line1="Assistant Professor (Mathematics)" line2="Department of Mathematics" line3="MNIT Jaipur" />

        {/* PROF DHARMENDRA TRIPATHI */}
        <KeynoteSpeaker_card_component image={} bold="Prof. (Dr.) Dharmendra Tripathi" line1="Associate Professor (Mathematics)" line2="Department of Mathematics" line3="National Institute of Technology, Uttarakhand"/>

        {/* PROF DR OD MAKINDE */}
        <KeynoteSpeaker_card_component image={} bold="Prof. (Dr.) O.D. Makinde" line1="Professor (Mathematics)" line2="Stellenbosch University, South Africa" />

        {/* Prof. (Dr.) Haci Mehmet Baskonus */}
        <KeynoteSpeaker_card_component image={} bold="Prof. (Dr.) Haci Mehmet Baskonus" line1="Faculty of Education" line2="Harran University, Turkey" />

        {/* PROF DR YUDHVEER SING */}
        <KeynoteSpeaker_card_component image={} bold="Dr. Yudhveer Singh" line1="Associate Professor" line2="Amity Institute of Information Technology" line3="Amity University Rajasthan, Jaipur"/>

        {/* DR DEVENDRA KUMAR */}
        <KeynoteSpeaker_card_component image={} bold="Dr. Devendra Kumar" line1="Assistant Professor" line2="Department of Mathematics" line3="University of Rajasthan, Jaipur"/>

        {/* DR JAGDEV SING */}
        <KeynoteSpeaker_card_component image={} bold="Prof. (Dr.) Dharmendra Tripathi" line1="" line2="" line3=""/>

        {/* DR PRADEEP KUMAR */}
        <KeynoteSpeaker_card_component image={} bold="Prof. (Dr.) Dharmendra Tripathi" line1="" line2="" line3=""/>

        {/* PROF ANIL KUMAR */}
        <KeynoteSpeaker_card_component image={} bold="Prof. (Dr.) Dharmendra Tripathi" line1="" line2="" line3=""/>

        {/* DR NARESH KUMAR */}
        <KeynoteSpeaker_card_component image={} bold="Prof. (Dr.) Dharmendra Tripathi" line1="" line2="" line3=""/>

        {/* DR VAIBHAV VARSHNEY */}
        <KeynoteSpeaker_card_component image={} bold="Prof. (Dr.) Dharmendra Tripathi" line1="" line2="" line3=""/>
      </div>
    </div>
  )
}
