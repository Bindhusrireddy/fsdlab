class Task {
    constructor(taskName, priority, dueDate, status = "in-progress") {
        this.taskName = taskName;
        this.priority = priority;
        this.dueDate = new Date(dueDate);
        this.status = status;
    }
    isOverdue() {
        const currentDate = new Date();
        return this.dueDate < currentDate && this.status !== "completed";
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
}
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    deleteTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.taskName !== taskName);
    }
    updateTask(taskName, newPriority, newDueDate, newStatus) {
        const task = this.tasks.find((task) => task.taskName === taskName);
        if (task) {
            task.priority = newPriority;
            task.dueDate = new Date(newDueDate);
            task.updateStatus(newStatus);
        }
    }
    sortTasks() {
        this.tasks.sort((a, b) => {
            if (a.priority !== b.priority) return a.priority - b.priority;
            return a.dueDate - b.dueDate;
        });
    }
    filterByStatus(status) {
        return this.tasks.filter((task) => task.status === status);
    }
    displayTasks() {
        this.tasks.forEach((task) => {
            const isOverdue = task.isOverdue();
            const taskStatus = isOverdue ? "overdue" : task.status === "completed" ? "completed" : "upcoming";
            const taskStyle = isOverdue ? "color: red;" : taskStatus === "upcoming" ? "color: green;" : "";
            console.log(`%c${task.taskName} - Priority: ${task.priority}, Due: ${task.dueDate.toLocaleDateString()} - Status: ${task.status}`, taskStyle);
        });
    }
}
const taskManager = new TaskManager();
const task1 = new Task("Finish Homework", 1, "2025-01-10");
const task2 = new Task("Buy Groceries", 2, "2025-01-05", "completed");
const task3 = new Task("Prepare Presentation", 1, "2025-01-07");
taskManager.addTask(task1);
taskManager.addTask(task2);
taskManager.addTask(task3);
taskManager.sortTasks();
taskManager.displayTasks();
console.log("In-progress tasks:");
console.log(taskManager.filterByStatus("in-progress"));

console.log("Completed tasks:");
console.log(taskManager.filterByStatus("completed"));
taskManager.updateTask("Buy Groceries", 1, "2025-01-08", "in-progress");
taskManager.displayTasks();
taskManager.deleteTask("Prepare Presentation");
taskManager.displayTasks();
