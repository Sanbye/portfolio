import React, { useState } from 'react';

const Contact =()=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

     function handleSubmit(event) {
        console.log('ok')
        event.preventDefault();
        fetch('http://localhost:3080/', {
            method: "POST",
            body: JSON.stringify({
                name: name,
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
                setName("");
                setMessage("");
            } else if(response.status === 'fail') {
                alert("Message failed to send.")
            }
        });
    }

    return(
        <>

            <h1>Contact</h1>

            <form id="contact-form" onSubmit={(e)=>handleSubmit(e)} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        </>
    );
}

export default Contact;