import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h2 className="section-title">Contáctame</h2>
                        <p>
                            ¿Interesado en trabajar juntos o tienes alguna pregunta sobre mi stack?
                            Siéntete libre de contactarme. Siempre estoy abierto a discutir nuevos proyectos
                            y desafíos de backend.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <FaEnvelope className="c-icon" />
                                <span>ricarberri@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="c-icon" />
                                <span>Remoto / Presencial</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/Ricardo4680" className="s-link"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/ricardo-berrios-999148320" className="s-link"><FaLinkedin /></a>
                            <a href="https://wa.me/584160192099" className="s-link"><FaWhatsapp /></a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" placeholder="Tu Nombre" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Tu Email" />
                        </div>
                        <div className="form-group">
                            <label>Mensaje</label>
                            <textarea placeholder="Cuéntame sobre tu proyecto..." rows="5"></textarea>
                        </div>
                        <button className="btn btn-primary" type="submit">Enviar Mensaje</button>
                    </form>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Ricardo Berrios. Desarrollado con React & Vite.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
