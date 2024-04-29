import "./register.css";
import be10 from "../assets/be10.png";
import india from  "../assets/india.webp";
import whatsApplogo from "../assets/whatsapp.png";
import dataSafe from "../assets/datasafe.png";
import privacy from "../assets/privacy.png";
import guaranteed from "../assets/guaranty .png";
import ssl from "../assets/security-public-1.webp"
import { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import {registerInStart,registerInSuccess,registerInFailure }   from "../redux/user/userRegisterSlice";
import {  useNavigate } from "react-router-dom";
const Register = () => {

  const [formdata, setFormData] = useState({});
  const {loading}  = useSelector(state=>state.user)
  const navigate = useNavigate();
  const dispatch =  useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      dispatch(registerInStart());
      const res= await fetch(`http://localhost:8000/users/register`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formdata)
      })
      const data = await res.json();
      console.log(data);
      if(data.success === false){
        dispatch(registerInFailure(data.message))
        return
      }
      dispatch(registerInSuccess(data))
      navigate("/payment")
    } catch (error) {
      dispatch(registerInFailure(error.message))
    }
  }
  return (
 <>
    <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "black",
          textAlign: "center",
          top: 0,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            color: "yellow",
          }}
        >
          CONGRATS! YOU ARE JUST ONE STEP AWAY FROM MASTERING AI TOOLS
        </h1>
      </div>
      <h2 style={{ color: "purple", textAlign: "center", fontSize: "28px" }}>
        Anyone from any field can attend this workshop.
      </h2>
      <h1 style={{ color: "black", textAlign: "center", fontSize: "40px" }}>
        {" "}
        Simply Pay <span style={{ color: "red" }}>₹ 9 + GST and</span> Get
        Started
      </h1>

   
        <div
          style={{ backgroundColor: "rgb(3 10 33)", height: "220px", width: "480px", marginLeft: "auto", marginRight: "auto", borderRadius: "12px", }} >
          <p style={{ marginLeft: "auto", marginRight: "auto" }}>
            <img src={be10} alt="image" />
          </p>

          <div style={{   display: "flex",   flexDirection: "column",   justifyContent: "flex-start",   alignItems: "flex-start", }}  >
            <p
              style={{ fontWeight: "bold", color: "white", marginLeft: "8px" }}
            >
              AT TOOLS WORKSHOP
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                marginTop: "-3px",
                fontSize: "20px",
                marginLeft: "8px",
              }}
            >
              ₹9.07{" "}
              <span
                style={{ marginLeft: "5px", fontSize: "12px" }}
                className="underline"
              >
                {" "}
                ₹929
              </span>
            </p>
            <p
              style={{
                fontWeight: "bold",
                marginTop: "-4px",
                marginLeft: "8px",
              }}
            >
              + GST
            </p>
          </div>
        
            <form style={{color:"black", display:"flex", flexDirection:"column", backgroundColor:"white", border:"0.5px solid black", borderRadius:"8px"}} onSubmit={handleSubmit}>
            

           
            <label htmlFor="fullname" style={{marginLeft:"-320px", marginTop:"25px"}}>Full Name<span style={{color:"red"}}>*</span></label>

            <input type="text"  onChange={handleChange} style={{backgroundColor:"white", color:"black",width:"80%", marginLeft:"auto", marginRight:"auto", padding:"10px", marginTop:"7px",borderRadius:"5px" , border:"1px solid black" , marginBottom:"15px"}} placeholder="Your Name" id="fullname"/>


            <label htmlFor="email" style={{marginLeft:"-290px"}}>Email Address<span style={{color:"red"}}>*</span></label>

            <input type="email"  onChange={handleChange} style={{backgroundColor:"white",color:"black", width:"80%", marginLeft:"auto", marginRight:"auto", padding:"10px", marginTop:"7px",borderRadius:"5px" , border:"1px solid black" , marginBottom:"15px"}} placeholder="example@example.com" id="email"/>

            <label htmlFor="mobileNo" style={{marginLeft:"-120px"}}>Mobile Number (WhatsApp Number)<span style={{color:"red"}}>*</span></label>
            <div style={{ display: "flex", alignItems: "center" }}>
            <img style={{ width: "8%",marginTop:"-7px" ,marginLeft:"36px", borderRadius:"5px",
                border: "1px solid black",padding:"6px", }} src={india} alt="indian Flag" />
            <input
              type="mobileno"
              onChange={handleChange}
              style={{
                backgroundColor: "white",
                color: "black",
                width: "70%",
                padding: "10px",
                marginTop: "7px",
                borderRadius: "5px",
                border: "1px solid black",
                marginBottom: "15px",
              }}
              placeholder=""
              id="mobileNo"
            />
          </div>
          <div style={{display:"flex"}}>
             <p style={{marginLeft:"49px"}}>You will get updates on your Whatsapp</p>
             <img style={{width:"5%",height:"15%", marginTop:"15px"}} src={whatsApplogo} alt="whatsapplogo" />
          </div>

            <button type="submit" style={{width:"80%",backgroundColor: "rgb(3 10 33)",marginLeft:"auto", marginRight:"auto", padding:"10px",marginBottom:"15px"}}>{loading ? "Loading..." : "Next"}</button>
         
            </form>
            
       </div>

       <div >
       <h1 style={{color:"rgb(31 41 55)",fontWeight:600, fontSize:"25px", marginTop:"450px", width:"100%"}}>Also, register before the deadline to unlock Bonuses worth ₹ 10,500!</h1>
       
       <div className="box">
       <div  style={{marginTop:"40px", border:"2px solid black", width:"25%", height:"260px", marginRight:"40px", borderRadius:"5px"}}>
        <h1 style={{marginLeft:"auto",marginRight:"auto",color:"green", fontSize:"25px", backgroundColor:"black",width:"60%", padding:"10px", borderRadius:"5px"}}>Bonus 1</h1>
         <p style={{color:"rgb(107 114 128)",padding:".15rem",fontSize:"17px"}}>50+ easy to implement productivity hacks</p>
          <span style={{color:"red",fontWeight:"bold"}}>Value: ₹ 5,000</span> 
       </div>
       <div style={{marginTop:"40px", border:"2px solid black", width:"25%", height:"260px", marginRight:"40px",borderRadius:"5px"}}>
        <h1 style={{marginLeft:"auto",marginRight:"auto",color:"green", fontSize:"25px", backgroundColor:"black",width:"60%",padding:"10px", borderRadius:"5px"}}>Bonus 2</h1>
        <p style={{color:"rgb(107 114 128)",padding:".15rem",fontSize:"17px"}}>800+ Premium Customizable PPT templates</p>
          <span style={{color:"red",fontWeight:"bold"}}>Value: ₹ 3,000</span> 
       </div>
       <div style={{marginTop:"40px", border:"2px solid black", width:"25%",height:"260px", marginRight:"40px",borderRadius:"5px"}}>
        <h1 style={{marginLeft:"auto",marginRight:"auto",color:"green", fontSize:"25px", backgroundColor:"black",width:"60%",padding:"10px", borderRadius:"5px"}}>Bonus 3</h1>
        <p style={{color:"rgb(107 114 128)",padding:".15rem",fontSize:"17px"}}>Ebook on Time Management</p>
          <span style={{color:"red",fontWeight:"bold"}}>Value: ₹ 2,500</span> 
       </div>
       </div>
         <h1 style={{color:"rgb(31 41 55)",fontSize:"18px",marginTop:"45px"}}>By the end of this 3-hour certified AI Tools workshop, you will also get a completion certificate by Be10X.</h1>
         <div className="footer">
           <div>
            <img style={{width:"20%",marginRight:"10px"}} src={dataSafe} alt="datasafe" />
            <h1 style={{color:"rgb(107 114 128)", fontSize:"15px", marginRight:"20px"}}>Your Data is Safe With Us</h1>
           </div>
           <div>
            <img style={{width:"20%",marginRight:"10px"}} src={privacy} alt="privacy" />
            <h1 style={{color:"rgb(107 114 128)", fontSize:"15px",marginRight:"20px"}}>We Protect Your Privacy</h1>
           </div>
           <div>
            <img style={{width:"20%",marginRight:"10px"}} src={guaranteed} alt="guaranteed" />
            <h1 style={{color:"rgb(107 114 128)", fontSize:"15px",marginRight:"20px"}}>100% Satisfaction Guaranteed</h1>
           </div>
           <div>
            <img style={{width:"90%"}} src={ssl} alt="ssl" />
           </div>
           <div >
           <span style={{color:"red",fontWeight:"bold",fontSize:"14px"}}>100% Secure Transaction.</span>
           <h1 style={{color:"rgb(107 114 128)", fontSize:"15px",marginRight:"25px"}}>All orders are through Razorpay, a very secure network. Your credit card information is never stored in any way. We respect your privacy</h1>
           </div>
         </div>
       </div>
   
</>
  );
};

export default Register;
