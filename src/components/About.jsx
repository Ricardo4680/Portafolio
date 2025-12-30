import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">Sobre Mí</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Soy <strong>Ingeniero de Sistemas</strong>, graduado en la <strong>UNEFA (2024)</strong>. Como Desarrollador Backend apasionado, tengo más de 2 años de experiencia construyendo aplicaciones escalables y seguras, con un enfoque profundo en el ecosistema de <strong>Python</strong> (Flask, FastAPI, Django).
                        </p>
                        <p>
                            Actualmente trabajo en <strong>Nexaven</strong>, donde me especializo en el desarrollo backend con <strong>FastAPI</strong> e implementación de soluciones con <strong>Odoo</strong>. Paralelamente, de forma personal, gestiono infraestructura de servidores con conocimientos sólidos en Linux (Ubuntu, Debian, RockyLinux) y entornos de virtualización con Proxmox y VMware.
                        </p>
                        <p>
                            Aunque mi especialidad es el backend, también manejo tecnologías frontend como React y Vite para integrar soluciones completas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
