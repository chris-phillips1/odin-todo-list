import TodoItem from './TodoItem.js';
import TodoProject from './TodoProject.js';

let defaultProject = new TodoProject('Todo', 'The default todo project');
let todo = new TodoItem('Test', 'Test description', '10/20/24', '10/18/24', 'high');
defaultProject.addTodoItem(todo);
console.log(defaultProject.toString());