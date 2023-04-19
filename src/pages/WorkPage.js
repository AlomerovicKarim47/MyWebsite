import React from 'react';
import "./WorkPage.css";

const WorkPage = () => {
    return (
        <div className = "container">
            <div className = "work">
                <span className = "projects-title"><span>Projects</span> <span>I've</span> <span>worked</span> <span> on</span></span>
                <div className = "projects">
                    <div className = "project">
                        <div className = "project-filter">
                            <span className = "project-filter-title">Todo Calendar</span>
                            <span className = "project-filter-description">An event planning app.</span>
                            <span className = "project-filter-link"><a target = "_blank" href = "https://todokalendar.onrender.com/">Visit</a></span>
                        </div>
                    </div>
                    <div className = "project">
                        <div className = "project-filter">
                            <span className = "project-filter-title">PLAY OFF</span>
                            <span className = "project-filter-description">An app for recreational sports match organization.</span>
                            <span className = "project-filter-link"><a target = "_blank" href = "https://playoff.onrender.com/">Visit</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkPage;
