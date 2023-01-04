import React from 'react'
import "../CSS/Projects.css"
import signUpImg from "../img/SignUpImg2.png"
import DashboardImg from "../img/DashboardImg2.png"
import Calculator from "../img/CalculatorImg2.png"
import ToDoList from "../img/ToDoListImg2.png"
import TicTacToe from "../img/TicTacToeImg2.png"
import WelcomeEnglish from "../img/EnglishImg2.png"

function Projects() {
    return (
        <div className='projects-container'>
            <div className='sign_up project'>
                <p>Sign Up Form</p>
                <div className='project_img'>
                    <img src={signUpImg} alt="" />
                </div>
            </div>
            <div className='dashboard project'>
                <div className='project_img'>
                    <img src={DashboardImg} alt="" />
                </div>
                <p>Admin Dashboard</p>
            </div>
            <div className='calculator project'>
                <p>Calculator</p>
                <div className='project_img'>
                    <img src={Calculator} alt="" />
                </div>
            </div>
            <div className='todo_list project'>
                <div className='project_img'>
                    <img src={ToDoList} alt="" />
                </div>
                <div>
                    <p>To Do List</p>
                    <p>text</p>
                </div>
            </div>
            <div className='tic_tac_toe project'>
                <p>Tic-Tac-Toe</p>
                <div className='project_img'>
                    <img src={TicTacToe} alt="" />
                </div>
            </div>
            <div className='english_page project'>
                <div className='project_img'>
                    <img src={WelcomeEnglish} alt="" />
                </div>
                <p>Welcome English</p>
            </div>
        </div>
    )
}

export default Projects