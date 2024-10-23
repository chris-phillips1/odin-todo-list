export default class TodoProject {
    projectTodos = [];

    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    addTodoItem(todoItem) {
        this.projectTodos.push(todoItem);
    }

    toString() {
        let projectString = `${this.title}: ${this.description}\n`;

        this.projectTodos.forEach((todo) => {
            projectString += todo.toString();
        });

        return projectString;
    }
}