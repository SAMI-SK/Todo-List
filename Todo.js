import inquirer from "inquirer";
let Todo = ["coding", "Gym"];
async function createTodo(Todo) {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            message: "Select an option",
            name: "option",
            choices: ["Add", "Update", "View", "Delete"]
        });
        if (answer.option === "Add") {
            let addMore = await inquirer.prompt({
                type: "input",
                message: "Add task in the list",
                name: "addmore",
            });
            Todo.push(addMore.addmore);
            Todo.forEach((addMore) => console.log(addMore));
            if (answer.option === "Update") {
                let Updatemore = await inquirer.prompt({
                    type: "list",
                    message: "Update task in the list",
                    name: "Todo",
                    choices: Todo.map((item) => (item))
                });
                let addMore = await inquirer.prompt({
                    type: "input",
                    message: "Add item in the list",
                    name: "todo",
                });
                let newTask = Todo.filter((val) => val !== Updatemore.Todo);
                Todo = [...newTask, addMore.todo];
            }
            if (answer.option === "view") {
                console.log("****TO DO LIST****");
                console.log(Todo);
                console.log("**********");
            }
            if (answer.option === "Delete") {
                let deleteTask = await inquirer.prompt({
                    type: "list",
                    message: "Delete task from the list",
                    name: "Deletetask",
                    choices: Todo.map((item) => (item))
                });
                let newTask = Todo.filter((val) => val !== deleteTask.Deletetask);
                Todo = [...newTask];
                console.log(Todo);
            }
        }
    } while (true);
}
createTodo(Todo);
