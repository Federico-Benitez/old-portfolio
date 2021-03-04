import React from "react";

function Contact() {
  const onSubmit = () => {};
  return (
    <div className="ContactPage">
      <div className="contact-container">
        <div className="contact-box">
          <div className="left"></div>
          <div className="right">
            <form onSubmit={onSubmit} method="POST">
              <h3 className="title">Contacto</h3>

              <input
                type="text"
                className="field"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Email"
              />

              <input
                type="text"
                className="field"
                name="asunto"
                placeholder="Asunto"
              />

              <textarea
                className="field area"
                rows="10"
                placeholder="Mensaje"
              ></textarea>

              <button type="submit" className="btn">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
