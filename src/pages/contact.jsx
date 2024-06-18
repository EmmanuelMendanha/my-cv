import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "L'adresse mail est obligatoire.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "L'adresse mail ne respecte pas le format attendu.";
    }

    if (!message) {
      newErrors.message = "Le message est obligatoire.";
    } else if (message.length < 10) {
      newErrors.message = "Le message est trop court.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert("Votre message a été envoyé !");
      // Réinitialiser le formulaire après soumission
      setEmail("");
      setMessage("");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div id="contact" className="contact">
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;