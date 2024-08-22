import React from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import "./ViewProfile.css"; // Ensure the CSS file is correctly imported
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { FaPerson } from "react-icons/fa6";
import { PiFirstAidKit } from "react-icons/pi";
import { GiLeg } from "react-icons/gi";
import { LiaFileMedicalAltSolid } from "react-icons/lia";

const ViewProfile = () => {
  const percentage = 40; // Static percentage value

  return (
    <div className="outer">
    <div className="view-profile-container">
        <div className="view">View Patient</div>
        <hr/>
      <header className="profile-header">
        <div className="profile-info">
          <p className="name">John Jeba, M/30</p>
          <p className="id">Patient ID: 123456</p>
        </div>
        <div className="profile-pic">
        <FaRegCircleUser  className="pic-prof"/>
        </div>
      </header>

      <section className="goal-section">
        <h3>Goal reached</h3>
        <div className="progress-section">
          <div className="semi-circle-container" style={{color:'white',fontSize:'2em'}}> 
          <SemiCircleProgressBar 
              percentage={percentage}
              showPercentValue
              strokeWidth='20'
              stroke="#fcb000"
              background="#d9d9d9"
              className="custom-progress-bar"
            />
        
          </div>
          <div className="goal-indicators">
            <div className="indicator-emg">
              <p>EMG</p>
              <div className="emg-line"></div>
            </div>
            <div className="indicator-rom">
              <p>ROM</p>
              <div className="rom-line"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="details-section">
  <div className="detail-question"><strong>Phone no:</strong></div>
  <div className="detail-answer"><span><IoMdCall />  123-456-7890</span></div>

  <div className="detail-question"><strong>Mail ID:</strong></div>
  <div className="detail-answer"><span><GoMail />  johndoe@example.com</span></div>

  <div className="detail-question"><strong>Affected side:</strong></div>
  <div className="detail-answer"><span><FaPerson />  Left</span></div>

  <div className="detail-question"><strong>Condition:</strong></div>
  <div className="detail-answer"><span><GiLeg />  Recovery</span></div>

  <div className="detail-question"><strong>Speciality:</strong></div>
  <div className="detail-answer"><span><PiFirstAidKit />  Orthopedics</span></div>

 
  
</section>
<hr/>
<div className="detail-section">
<div className="detail-question"><strong><LiaFileMedicalAltSolid />  Medical history:</strong> <span>No significant history</span></div>
</div>
<hr/>

    </div>
    </div>
  );
};

export default ViewProfile;
