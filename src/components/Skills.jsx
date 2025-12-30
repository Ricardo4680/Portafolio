import React from 'react';
import { FaPython, FaJava, FaDatabase, FaLinux, FaReact, FaDocker, FaServer, FaGithub } from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiMariadb, SiFlask, SiFastapi, SiDjango, SiVite, SiProxmox, SiVmware } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Desarrollo Backend",
            icon: <FaServer />,
            skills: [
                { name: "Python", icon: <FaPython /> },
                { name: "Flask", icon: <SiFlask /> },
                { name: "FastAPI", icon: <SiFastapi /> },
                { name: "Django", icon: <SiDjango /> },
                { name: "Odoo", icon: <FaServer /> },
                { name: "Java (POO)", icon: <FaJava /> },
            ]
        },
        {
            title: "Bases de Datos",
            icon: <FaDatabase />,
            skills: [
                { name: "PostgreSQL", icon: <SiPostgresql /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "MariaDB", icon: <SiMariadb /> },
            ]
        },
        {
            title: "Infraestructura & Servidores",
            icon: <FaLinux />,
            skills: [
                { name: "Linux (Ubuntu/Debian)", icon: <FaLinux /> },
                { name: "RockyLinux", icon: <FaLinux /> },
                { name: "Proxmox", icon: <SiProxmox /> },
                { name: "VMware", icon: <SiVmware /> },
                { name: "Admin Servidores", icon: <FaServer /> },
            ]
        },
        {
            title: "Frontend & Herramientas",
            icon: <FaReact />,
            skills: [
                { name: "React", icon: <FaReact /> },
                { name: "Vite", icon: <SiVite /> },
                { name: "CSS3", icon: null },
                { name: "Git", icon: <FaGithub /> },
                { name: "GitHub", icon: <FaGithub /> },
            ]
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Habilidades Técnicas</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div className="card skill-card" key={index}>
                            <div className="skill-header">
                                <span className="skill-cat-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <div className="skill-item" key={idx}>
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
