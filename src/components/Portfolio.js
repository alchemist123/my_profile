import React, { useEffect, useState } from 'react';
import fetchLinkPreview from '../utils/fetchLinkPreview';
import '../assets/css/styles.css';

const Portfolio = () => {
    const projects = [
        { url: 'https://steamcube.in/', name: 'StemClass', title: 'StemClass', description: "Stemclass is an AI-based web application that helps schools take their students to the 4.0 technologies"},
        { url: 'https://retailer.edge.grandwaytech.com/', name: 'Ecaps Edge', title: 'Ecaps Edge', description: "Spearheaded the development of 'Ecaps Edge', a scalable, multi-tenant financial transaction platform with web and mobile access." },
        { url: 'https://sm-admin.srv3.mtlstaging.com/', name: 'Samaritan', title: 'Samaritan', description: "Samaritan is a small-scale social media application like Instagram for an NGO team. we design the system like a scalable architecture." },
        { url: 'https://flaviant-web.srv3.mtlstaging.com/home', name: 'Forum IAS', title: 'Forum IAS', description: "Form IAS a highly scalable social networking application like LinkedIn, X app with 5000+ initial users" },
        { url: 'https://github.com/alchemist123/doconline', name: 'Doctor Online', title: 'Doctor Online', description: 'Doctor Onlineis a doctor appointment system' },
        { url: 'https://link.springer.com/chapter/10.1007/978-981-16-3675-2_41', name: 'Research Paper 1', title: 'Research Paper 1', description: "Real-Time Emotion Recognition from Facial Expressions Using Convolutional Neural Network with Fer2013 Dataset" },
    ];

    const [previews, setPreviews] = useState({});

    useEffect(() => {
        const fetchPreviews = async () => {
            const newPreviews = {};
            for (const project of projects) {
                try {
                    const preview = await fetchLinkPreview(project.url);
                    newPreviews[project.url] = preview;
                } catch (error) {
                    console.error('Error fetching preview for', project.url, error);
                    // Set a default preview if fetching fails
                    newPreviews[project.url] = {
                        image: 'https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg', // Placeholder image URL
                        title: project.title,
                        description: project.description,
                    };
                }
            }
            setPreviews(newPreviews);
        };
        fetchPreviews();
    }, [projects]);

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section-title">Portfolio</h2>
            <div className="portfolio__container bd-grid">
                {projects.map((project, index) => (
                    <div className="portfolio__item" key={index}>
                        {previews[project.url] ? (
                            <div className="portfolio__preview">
                                <img
                                    src={previews[project.url].image}
                                    alt={previews[project.url].title}
                                    className="portfolio__img"
                                />
                                <h3 className="portfolio__preview-title">{previews[project.url].title}</h3>
                                <p className="portfolio__preview-description">{previews[project.url].description}</p>
                            </div>
                        ) : (
                            <div className="portfolio__preview">
                                <img src="https://via.placeholder.com/150" alt={project.title} className="portfolio__img" />
                                <h3 className="portfolio__preview-title">{project.name}</h3>
                                <p className="portfolio__preview-description">{project.description}</p>
                            </div>
                        )}
                        <div className="portfolio__link">
                            <a href={project.url} className="portfolio__link-name">{project.name}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
