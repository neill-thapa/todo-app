import { DisplayController } from "./displayController.js"
import { ProjectManager } from "./projectManager.js"
import "./style.css"

let currentProject = null

const projectButton = document.querySelector(".add-project")
projectButton.addEventListener("click", () => {
    DisplayController.renderProjectModal((title, description) => {
        ProjectManager.addProject(title, description)
        updateUI()
    })  
})

const todoButton = document.querySelector(".add-todo")
todoButton.addEventListener("click", () => {
    DisplayController.renderTodoModal((title, description, dueDate, priority) => {
        currentProject.addTodo(title, description, dueDate, priority)
        DisplayController.renderProject(currentProject)
    })
})

function handleProjectClick(project) {
    currentProject = project
    DisplayController.renderProject(project)
}

function handleProjectDelete(project) {
    const index = ProjectManager.getProjects().indexOf(project)
    ProjectManager.removeProject(index)
    
    // If we deleted the project we're currently viewing, clear it
    if (currentProject === project) {
        currentProject = null
        const title = document.querySelector("#project-title")
        const todosList = document.querySelector("#todos-list")
        title.textContent = ""
        todosList.innerHTML = ""
    }
    
    updateUI()
}

function updateUI() {
    DisplayController.renderProjects(
        ProjectManager.getProjects(), 
        handleProjectClick, 
        handleProjectDelete
    )
}

DisplayController.renderProjects(
    ProjectManager.getProjects(), 
    handleProjectClick, 
    handleProjectDelete
)
handleProjectClick(ProjectManager.getProjects()[0])