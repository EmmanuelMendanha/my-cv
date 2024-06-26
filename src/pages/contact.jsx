import React, { useState, useEffect } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedMessage, setTouchedMessage] = useState(false);

  useEffect(() => {
    if (touchedEmail) {
      validateEmail();
    }
  }, [email, touchedEmail]);

  useEffect(() => {
    if (touchedMessage) {
      validateMessage();
    }
  }, [message, touchedMessage]);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "L'adresse mail est obligatoire." }));
    } else if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "L'adresse mail ne respecte pas le format attendu." }));
    } else {
      setErrors((prevErrors) => {
        const { email, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateMessage = () => {
    if (!message) {
      setErrors((prevErrors) => ({ ...prevErrors, message: "Le message est obligatoire." }));
    } else if (message.length < 10) {
      setErrors((prevErrors) => ({ ...prevErrors, message: "Le message est trop court." }));
    } else {
      setErrors((prevErrors) => {
        const { message, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert("Votre message a été envoyé !");
      // Réinitialiser le formulaire après soumission
      setEmail("");
      setMessage("");
      setTouchedEmail(false);
      setTouchedMessage(false);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

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

  return (
    <section id="contact" className="contact">
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Votre email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onFocus={() => setTouchedEmail(true)}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onFocus={() => setTouchedMessage(true)}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;