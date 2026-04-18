export function createTodo(title, description, dueDate, priority) {

    let completeStatus = false
    
    function toggleCompleteStatus() {
        completeStatus = !completeStatus
    }

    return {
        title,
        description,
        dueDate,
        priority,
        getCompleteStatus: () => completeStatus,
        toggleCompleteStatus
    }
}