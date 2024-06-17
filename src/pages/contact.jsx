import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("L'adresse mail ne respecte pas le format attendu");
      return;
    }
    alert("Votre message a été envoyé");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p>Formulaire de contact...</p>
      </div>
    </section>
  );
};

export default Contact;
