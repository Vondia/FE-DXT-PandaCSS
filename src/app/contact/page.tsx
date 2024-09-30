"use client"
import { css } from "../../../styled-system/css"
import React from 'react';


type ContactProps = {}

export default function Contactpage() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    return (
        <div className={css({color: "red.700", display: "flex", flexDirection: "column",alignItems: "center", justifyContent: "center"})}>
            <h1>Contact</h1>
            <form
            onSubmit={event => {
                event.preventDefault();
                alert(`Your name is ${name}, email is ${email} and message is ${message}`);
                setName('');
                setEmail('');
                setMessage('');
              }}
            >
        <div>
          <label>Name</label>
          <input
          type="text"
          value={name}
          onChange={event => {setName(event.target.value);}}
          />
        </div>

        <div>
          <label>Email</label>
          <input
          type="text"
          value={email}
          onChange={event => {setEmail(event.target.value);}}
          />
        </div>

        <div>
          <label>Message</label>
          <textarea
           name="message"
           placeholder="hoi doei"
           value={message}
           onChange={event => {setMessage(event.target.value);}}
           />
        </div>

        <button type="submit">Send message</button>
      </form>
        </div>
    )
};
