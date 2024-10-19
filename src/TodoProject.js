export default class TodoProject {
    todoProject = [];

    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    addTodoItem(todoItem) {
        this.todoProject.push(todoItem);
    }
}