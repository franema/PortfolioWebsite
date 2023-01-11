import React, { useState } from 'react'
import "../CSS/Projects.css"
import { ProjectsData } from "../Data/ProjectsData"
import TVStatic from "../img/tv-static.gif"

function Projects() {

    const [projectShow, setProjectShow] = useState(TVStatic)

    function setStatic() {
        setProjectShow(TVStatic)
    }

    return (
        <div className='projects-container'>
            <div className='projects-tv'>
                <img className='project-image' src={projectShow} alt="project screenshot" />
                <div className='tv'></div>
            </div>
            <div className='projects-description'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, architecto!</p>
            </div>
            <div className='projects-list'>
                {ProjectsData.map((project) => (
                    <a
                        href={project.anchor}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='project-anchor'
                        key={project.name}>
                        <p
                            onMouseEnter={() => setProjectShow(project.image)}
                            onMouseLeave={setStatic}>
                            {project.name}
                        </p>
                    </a>
                ))}
            </div>


            {/* {ProjectsData.map(project => (
                project.isLeftText ? (
                    <div className={"project"} key={project.name}>
                        <div className='project_txt'>
                            <h4 className="left_text">{project.name}</h4>
                            <p className='left_text'>Algo y algo mas y no se alguna otra cosa, ya veremos... o no</p>
                        </div>
                        <div className="project_img">
                            <a href={project.anchor} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt="" />
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className={"project"} key={project.name}>
                        <div className="project_img">
                            <a href={project.anchor} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt="" />
                            </a>
                        </div>
                        <h4>{project.name}</h4>
                    </div>
                )
            ))} */}
        </div>
    )
}

export default Projects