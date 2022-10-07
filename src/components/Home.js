import { useEffect, useRef, useState } from "react";
import "./styles.css";
import logo from "./images/logo.svg"
import dashboard from "./images/illustration-dashboard.png";
import facebook from "./images/icon-facebook.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";

function Home() {

  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);
  const [message, setMessage] = useState("Please provide a valid email address");

  function handleSubmit(e) {
    e.preventDefault();

    if (valid)
      console.log("Submitted Successfully");
   
  }
  
  useEffect(() => {
    document.getElementById("form").onmousedown = setClicked(true);
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    
    if (clicked) {
      if (regEx.test(email)) {
        document.getElementById("email").className = "";
        document.getElementById("button").className = "";
        setValid(true);

      } else {
        document.getElementById("button").className = "button-disabled";
        document.getElementById("email").className = "disabled"
        setValid(false);

      }
    }

  }, [email]);

  return (
    <main className="container">
      <img src={logo} alt="logo" height={22.5} width={70} />
      <div className="title">We are launching <span className="bold">soon!</span></div>
      <div className="subtitle">Subscribe and get notified</div>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="form" id="form">
          <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Your Email Address" id="email"/>
          <button type="submit" id="button">Notify Me</button>
        </div>
        {valid ? "" : <div className="message">{message}</div>}
      </form>
      <img src={dashboard} alt="dashboard" className="dashboard"/>
      <div className="share">
        <img className="round" src={facebook} alt="share logo" />
        <img className="round" src={twitter} alt="share logo" />
        <img className="round" src={pinterest} alt="share logo" />
      </div>
      <p>&#169; Copyright Ping. All rights reserved.</p>
    </main>
  )
}

export default Home;