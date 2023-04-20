import React from 'react';
import "./WorkPage.css";
import Project from '../components/Project';

const WorkPage = () => {
    return (
        <div className = "container">
            <div className = "work">
                <span className = "projects-title"><span>Projects</span> <span>I've</span> <span>worked</span> <span> on</span></span>
                <div className = "projects">
                    <Project 
                        title = "Todo Calendar" 
                        description = "An event planning app" 
                        link = "https://todokalendar.onrender.com"
                        thumbnail = "/images/TodoKalendar.png"/>
                    <Project 
                        title = "PlayOff" 
                        description = "An app for recreational match organization" 
                        link = "https://playoff.onrender.com"
                        thumbnail= "/images/PlayOff.png"/>
                </div>
            </div>
        </div>
    );
}

export default WorkPage;
