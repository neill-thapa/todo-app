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
    if (!currentProject) {
        alert("Please select a project first!")
        return
    }
    DisplayController.renderTodoModal((title, description, dueDate, priority) => {
        currentProject.addTodo(title, description, dueDate, priority)
        DisplayController.renderProject(currentProject, handleToggleTodo)
    })
})

function handleProjectClick(project) {
    currentProject = project
    DisplayController.renderProject(project, handleToggleTodo)
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

function handleToggleTodo(todo) {
    console.log("Toggle clicked!", todo)
    todo.toggleCompleteStatus()
    DisplayController.renderProject(currentProject, handleToggleTodo)
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
if (ProjectManager.getProjects().length > 0) {
    handleProjectClick(ProjectManager.getProjects()[0])
}