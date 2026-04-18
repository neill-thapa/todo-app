import { createProject } from "./createProject.js"

export const ProjectManager = (function() {
    const projects = []  // private, single source of truth

    function addProject(name, description) {
        const project = createProject(name, description)
        projects.push(project)
    }

    function getProjects() {
        return projects
    }

    function removeProject(index) {
        projects.splice(index, 1)
    }

    return {
        addProject,
        getProjects,
        removeProject
    }
})()