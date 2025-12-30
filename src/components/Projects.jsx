import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Mermis",
            description: "Plataforma especializada en el control y rastreo de mermas para el sector gastronómico. Desarrollada en Nexaven para optimizar pérdidas operativas.",
            tags: ["FastAPI", "Odoo", "Backend", "Python"],
            demo: "https://app.mermis.site/",
            landing: "https://www.mermis.site/",
            private: true,
            gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
        },
        {
            title: "Sistema Control de Asistencia y Gestión Académica (SCGA)",
            description: "Plataforma integral para el control de asistencia y administración académica. Actualmente en fase de pruebas de calidad previa a producción.",
            tags: ["React", "Backend", "Python", "Vercel"],
            github: "https://github.com/Ricardo4680/SCGA",
            demo: "https://scga.vercel.app",
            private: true,
            gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
        },
        {
            title: "Sistema de Condominio",
            description: "Sistema diseñado para la gestión y administración de condominios, enfocado en organizar pagos y mantenimiento de áreas comunes.",
            tags: ["Python", "Flask/Django", "PostgreSQL"],
            github: "https://github.com/Ricardo4680/Condominio",
            demo: "#", // No está en producción aún
            gradient: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)"
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Proyectos Destacados</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="card project-card" key={index}>
                            <div
                                className="project-image"
                                style={{ background: project.gradient }}
                            >
                                <FaCode className="project-icon" />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx}>{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {!project.private && (
                                        <a href={project.github} className="btn-icon" title="Ver Código"><FaGithub /> Código</a>
                                    )}
                                    {project.landing && (
                                        <a href={project.landing} className="btn-icon" target="_blank" rel="noreferrer" title="Ver Landing"><FaExternalLinkAlt /> Web</a>
                                    )}
                                    {project.demo !== "#" && (
                                        <a href={project.demo} className="btn-icon" target="_blank" rel="noreferrer" title="Ver Aplicativo"><FaExternalLinkAlt /> App</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
