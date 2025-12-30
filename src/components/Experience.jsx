import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "Nexaven",
            role: "Ingeniero Backend",
            duration: "5 Meses - Presente",
            description: "Especializado en desarrollo backend utilizando FastAPI e integración de sistemas con Odoo. Optimización de procesos y creación de APIs robustas.",
            active: true
        },
        {
            company: "Freelance / Roles Anteriores",
            role: "Desarrollador Backend Python",
            duration: "2 Años",
            description: "Desarrollo de APIs escalables y aplicaciones web. Especialización en ecosistemas Python y gestión de bases de datos con PostgreSQL y MySQL.",
            active: false
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experiencia Profesional</h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                            <div className="timeline-content card">
                                <div className="timeline-date">{exp.duration}</div>
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
