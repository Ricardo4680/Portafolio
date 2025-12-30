import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaPython, FaDatabase } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-bg-elements">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero-badge">Backend Developer Expert</div>
                    <h1>
                        Hola, soy Ricardo Berrios <br />
                        <span className="gradient-text">Ingeniero de Sistemas</span>
                    </h1>
                    <p className="hero-description">
                        Especialista en <strong>Backend con Python</strong>.
                        2+ Años de experiencia creando soluciones robustas con Flask, FastAPI y Django.
                        Actualmente Ingeniero en <strong>Nexaven</strong>.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
                        <a href="#contact" className="btn btn-outline">Contáctame</a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <FaPython className="stat-icon" />
                            <span>Python Expert</span>
                        </div>
                        <div className="stat-item">
                            <FaServer className="stat-icon" />
                            <span>Servidores & Linux</span>
                        </div>
                        <div className="stat-item">
                            <FaDatabase className="stat-icon" />
                            <span>Bases de Datos</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    {/* Abstract representation of backend/server architecture */}
                    <div className="server-rack">
                        <div className="server-unit active">
                            <div className="lights">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                        <div className="server-unit">
                            <div className="lights">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                        <div className="server-unit active">
                            <div className="lights">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                        <div className="floating-icons">
                            <FaPython className="float-icon i-1" />
                            <FaDatabase className="float-icon i-2" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;
