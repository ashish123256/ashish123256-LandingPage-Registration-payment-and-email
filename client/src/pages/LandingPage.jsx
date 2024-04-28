import ChatGptlogo from "../assets/ChatGPT-Logo.png";
import "./landing.css";
import check from "../assets/check-304167_1280.png";
import chatgpt from "../assets/chatgpt.webp";
import footerImg from "../assets/footer.jpg";
import onAprilDate from "../assets/onapril.jpg";
import pendingI from "../assets/panding.jpg";
import timing from "../assets/timing.jpg";
import liveVI from "../assets/livevideo.jpg";
import {Link } from "react-router-dom";
 
const LandingPage = () => {


  return (
    <div className="landContain">
      <h1>
        <span className="orange">Learn to use</span>{" "}
        <span
          className="underline"
          style={{ fontSize: "larger", fontWeight: "bold" }}
        >
          AI Tools & ChatGPT
        </span>{" "}
        <img src={ChatGptlogo} alt="chatGptlogo" />
      </h1>
      <p className="landingP">
        Create any kind of <span>Presentations under 10 secs,</span> do any kind
        of IT work under 10 mins, become <span>top 1% of excel users</span> who
        can use the function and <span>save your job </span> and 90% of your
        time on daily basis
      </p>
      <p style={{ color: "white", fontSize: "18px" }}>
        <span>
          <img
            style={{ width: "15px", marginTop: 1 }}
            src={check}
            alt="check"
          />
        </span>{" "}
        BECOME A HIGHLY PAID PROJECT ENGINEER (AVERAGE SALARY17LPA)
      </p>

      <p style={{ color: "white", fontSize: "18px" }}>
        <span>
          <img
            style={{ width: "15px", marginTop: 1 }}
            src={check}
            alt="check"
          />
        </span>{" "}
        NO PRIOR TECHNICAL OR AI KNOWLEDGE REQUIRED
      </p>
      <p style={{ color: "white", fontSize: "18px" }}>
        <span>
          <img
            style={{ width: "15px", marginTop: 1 }}
            src={check}
            alt="check"
          />
        </span>{" "}
        SAVE UPTO 2 HOURS EVERYDAY
      </p>
      <p style={{ color: "white", fontSize: "18px", marginBottom: "30px" }}>
        <span>
          <img
            style={{ width: "15px", marginTop: 1 }}
            src={check}
            alt="check"
          />
        </span>{" "}
        GROW YOUR SALARY UPTO 3X
      </p>
      <div className="imageContainer">
        <div className="time">
          <div>
            <span
              style={{
                display: "flex",
                marginBottom: "15px",
                padding: "10px",
                border: "2px solid rgb(30, 29, 29)",
                background: "black",
              }}
            >
              <img src={onAprilDate} style={{ width: "20px", left: "4px" }} />
              On April 21, 2024
            </span>
          </div>
          <div>
            <span
              style={{
                padding: "10px",
                border: "2px solid rgb(30, 29, 29)",
                background: "black",
              }}
            >
              <img src={liveVI} style={{ width: "20px", left: "4px" }} /> Live
              Session
            </span>
          </div>
        </div>

        <div
          className="time"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <span
              style={{
                display: "flex",
                marginBottom: "15px",
                padding: "10px",
                border: "2px solid rgb(30, 29, 29)",
                background: "black",
              }}
            >
              <img src={pendingI} style={{ width: "20px", left: "4px" }} /> 3+
              Hours
            </span>
          </div>
          <div>
            <span
              style={{
                padding: "10px",
                border: "2px solid rgb(30, 29, 29)",
                background: "black",
              }}
            >
              <img src={timing} style={{ width: "20px", left: "4px" }} /> 11:00
              am Onwards
            </span>
          </div>
        </div>
        <div>
          <img style={{ width: "450px" }} src={chatgpt} alt="chatgpt" />
        </div>
      </div>
      <Link to={"/register"}>
      <button className="offerButton"  >
        <h1> &gt;&gt; Become a super working professional now!</h1>
        <span>
          (Only <span className="line">Rs.999</span> Rs.9)
        </span>
      </button>
      </Link>
      <h1>
        BONUSES WORTH <span style={{ color: "yellow" }}>RS. 10,500</span> IF YOU
        REGISTER BEFORE MIDNIGHT.{" "}
      </h1>
      <h1>FEATURED IN</h1>
      <div className="fo">
         <footer >
         <img style={{width:"100%"}} src={footerImg} alt="Footer-Image"/>
         </footer>
        </div>  
    </div>
  );
};

export default LandingPage;
