import { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
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

  const handleTextAreaChange = useCallback(() => {
    if (textArea.value !== "" || focus) {
      customPlaceholder.style.top = "-1.25rem";
      customPlaceholder.style.scale = "0.8";
      customPlaceholder.style.borderColor = "var(--shadow)";
    }else{
      customPlaceholder.style.top = "1.5rem";
      customPlaceholder.style.scale = "1";
      customPlaceholder.style.borderColor = "transparent";
    }
  }, [textArea, focus, customPlaceholder]);

  useEffect(() => {
    if (textArea !== null) {
      textArea.addEventListener("input", handleTextAreaChange);
      handleTextAreaChange();
    }

  }, [textArea, focus, handleTextAreaChange]);

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
              alert("Message envoyé !");
              setEmail("");
              setFirstName("");
              setLastName("");
              setMessage("");
          } else if(response.status === 'fail') {
              alert("Échec de l'envoi du message.")
          }
      });
    } 

  return(
      <>
          <Helmet>
              <title>Contact</title>
          </Helmet>

          <section className='contactContainer'>

            <img src={sylvImg} className='sylvImg' alt="Sylvain Bousquet"></img>

            <div className='formContainer'>

              <form id="contact-form" onSubmit={(e)=>handleSubmit(e)} method="POST">

                <h1>Contactez-moi !</h1>

                <div className="form-group">

                  <input type="text" className="form-control" autoComplete='none'  value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="Prénom"/>

                  <input type="text" className="form-control" autoComplete='none'  value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Nom"/>

                  <input type="email" className="form-control" autoComplete='none' aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>

                  <div className='textArea'>

                    <textarea className={`${focus ? "focused" : ""}`} rows="5" value={message} onChange= {(e)=>setMessage(e.target.value)} onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}}/>
                    <div className='customPlaceholder'>Message</div>
                  </div>

                </div>

                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                  <button type="submit" className="contactBtn">Envoyer</button>
                </div>
                
              </form>
            </div>

          </section>

      </>
  );
}

export default Contact;