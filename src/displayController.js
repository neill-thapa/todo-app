import { ProjectManager } from "./projectManager.js"
import { createModal } from "./helpers.js"
import { createInput } from "./helpers.js"

export const DisplayController = (function() {

    const title = document.querySelector("#project-title")
    const todosList = document.querySelector("#todos-list")
    const projectsList = document.querySelector("#projects-list")
    
    function renderProject(project, onToggleClick) {
        const title = document.querySelector("#project-title")
        const todosList = document.querySelector("#todos-list")

        title.textContent = project.name
        todosList.innerHTML = ""

        project.getTodos().forEach(todo => {
            const div = document.createElement("div")
            const titleEl = document.createElement("span")
            titleEl.textContent = todo.title

            const descriptionEl = document.createElement("span")
            descriptionEl.textContent = todo.description

            const dueDateEl = document.createElement("span")
            dueDateEl.textContent = todo.dueDate

            const priorityEl = document.createElement("span")
            priorityEl.textContent = todo.priority 

            const statusEl = document.createElement("span")
            statusEl.textContent = todo.getCompleteStatus() ? "✓ Complete" : "○ Incomplete"

            const toggleBtn = document.createElement("button")
            toggleBtn.textContent = "Toggle Status"
            toggleBtn.addEventListener("click", () => {
                onToggleClick(todo)
            })
            statusEl.appendChild(toggleBtn)

            div.appendChild(titleEl)
            div.appendChild(descriptionEl)
            div.appendChild(dueDateEl)
            div.appendChild(priorityEl)
            div.appendChild(statusEl)
            
            todosList.appendChild(div)
        })
    }

    function renderProjects(projects, onProjectClick, onProjectDelete) {
        const projectsList = document.querySelector("#projects-list")
        projectsList.innerHTML = ""

        projects.forEach(project => {
            const div = document.createElement("div")

            div.textContent = project.name

            const deleteBtn = document.createElement("button")
            deleteBtn.textContent = "Delete"

            deleteBtn.addEventListener("click", (e) => {
                e.stopPropagation()
                onProjectDelete(project)
            })            
            div.appendChild(deleteBtn)       

            div.addEventListener("click", () => {
                onProjectClick(project)
            })
            projectsList.appendChild(div)
        })
    }

    function renderProjectModal(onSubmit) {
        const { modal, form } = createModal()

        const title = createInput("Project Title", "project-title")
        const description = createInput("Description", "project-description")

        form.appendChild(title.label)
        form.appendChild(title.input)

        form.appendChild(description.label)
        form.appendChild(description.input)

        const button = document.createElement("button")
        button.textContent = "Create Project"
        form.appendChild(button)

        form.addEventListener("submit", (e) => {
            e.preventDefault()

            if (
                title.input.value === "" || 
                description.input.value === ""
            ) {
                alert("Please fill in all fields")
                return
            }

            onSubmit(
                title.input.value,
                description.input.value
            )

            modal.close()
            modal.remove()
        })
    }

    function renderTodoModal(onSubmit) {
        const { modal, form } = createModal()

        const title = createInput("Title", "todo-title")
        const description = createInput("Description of the task", "todo-description")
        const dueDate = createInput("Due Date", "todo-date")
        const priority = createInput("Priority", "todo-priority")   

        form.appendChild(title.label)
        form.appendChild(title.input)

        form.appendChild(description.label)
        form.appendChild(description.input)

        form.appendChild(dueDate.label)
        form.appendChild(dueDate.input)

        form.appendChild(priority.label)
        form.appendChild(priority.input)

        const button = document.createElement("button")
        button.textContent = "Create To-Do"
        form.appendChild(button)

        form.addEventListener("submit", (e) => {
            e.preventDefault()

            if (
                title.input.value === "" || 
                description.input.value === "" ||
                dueDate.input.value === "" ||
                priority.input.value === ""
            ) {
                alert("Please fill in all fields")
                return
            }

            onSubmit(
                title.input.value,
                description.input.value,
                dueDate.input.value,
                priority.input.value
            )

            modal.close()
            modal.remove()
        })
    }  

    return {
        renderProject,
        renderProjects,
        renderProjectModal,
        renderTodoModal
    }
})()