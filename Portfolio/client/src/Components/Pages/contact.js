import React, { useEffect, useState } from 'react';
import '../../css/contact.css';
import sylvImg from '../../Images/photoSylvain.png';

const Contact =()=>{

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const customPlaceholder = document.querySelector(".customPlaceholder");
  const textArea = document.querySelector(".textArea textarea");
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (textArea !== null) {
      textArea.addEventListener("input", handleTextAreaChange);
      handleTextAreaChange();
    }
    
  }, [textArea,focus]);

  const handleTextAreaChange = (e) => {
    
    if (textArea.value !== "" || focus) {
      customPlaceholder.style.top = "-1.5rem";
      customPlaceholder.style.borderColor = "var(--shadow)";
    }else{
      customPlaceholder.style.top = "1.5rem";
      customPlaceholder.style.borderColor = "transparent";
    }
  };

    function handleSubmit(event) {

      event.preventDefault();
      fetch('http://localhost:3080/', {
          method: "POST",
          body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              email: email,
              message: message
          }),

          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
      }).then(
          (response) => (response.json())
              ).then((response)=> {
          if (response.status === 'success') {
              alert("Message Sent.");
              setEmail("");
              setFirstName("");
              setLastName("");
              setMessage("");
          } else if(response.status === 'fail') {
              alert("Message failed to send.")
          }
      });
    } 

  return(
      <>

          <section className='contactContainer'>

            <img src={sylvImg} className='sylvImg'></img>

            <div className='formContainer'>

              <form id="contact-form" onSubmit={(e)=>handleSubmit(e)} method="POST">

                <h1>Get in touch!</h1>
    
                <div className="form-group">
                  
                  <input type="text" className="form-control" autoComplete='none'  value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First name"/>

                  <input type="text" className="form-control" autoComplete='none'  value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last name"/>

                  <input type="email" className="form-control" autoComplete='none' aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e. target.value)} placeholder="Email"/>

                  <div className='textArea'>
                    
                    <textarea className={`${focus ? "focused" : ""}`} rows="5" value={message} onChange= {(e)=>setMessage(e.target.value)} onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}}/>
                    <div className='customPlaceholder'>Message</div>
                  </div>

                </div>
                
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                  <button type="submit" className="contactBtn">Submit</button>
                </div>
                
              </form>
            </div>

          </section>

      </>
  );
}

export default Contact;