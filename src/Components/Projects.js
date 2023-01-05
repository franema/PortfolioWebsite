import React from 'react'
import "../CSS/Projects.css"
import { ProjectsData } from "../Projects/ProjectsData"

function Projects() {

    return (
        <div className='projects-container'>
            {ProjectsData.map(project => (
                project.isLeftText ? (
                    <div className={"project"}>
                        <h4 className="left_text">{project.name}</h4>
                        <div className="project_img">
                            <a href={project.anchor} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt="" />
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className={"project"}>
                        <div className="project_img">
                            <a href={project.anchor} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt="" />
                            </a>
                        </div>
                        <h4>{project.name}</h4>
                    </div>
                )
            ))}
        </div>
    )
}

export default Projects