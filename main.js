import inquirer from "inquirer";
let todoapp = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: 'todoapp',
            type: 'input',
            message: "What you want to add in your todoapp"
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: "Do you want to add more ?",
            default: "false"
        }
    ]);
    todoapp.push(addTask.todoapp);
    condition = addTask.addMore;
    console.log(todoapp);
}
