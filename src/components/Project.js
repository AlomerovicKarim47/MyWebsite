import React from 'react';

const Project = ({title, description, link, thumbnail}) => {
    return (
        <div className = "project" style = {{backgroundImage: `url(${thumbnail})`}}>
            <div className = "project-filter">
                <span className = "project-filter-title">{title}</span>
                <span className = "project-filter-description">{description}</span>
                <span className = "project-filter-link"><a target = "_blank" href = {link}>Visit</a></span>
            </div>
        </div>
    );
}

export default Project;
