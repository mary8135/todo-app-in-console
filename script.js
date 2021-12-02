let input = prompt('What would you like to do?');

const myTodoList = ['learn to code', 'stop being poor'];

while (input !== 'quit'){
    if (input === 'list'){
        console.log('**********');
        for(let i = 0; i < myTodoList.length; i++){
            console.log`${i}: ${myTodoList[i]}`;
        }
        console.log('**********');
    }else if (input === 'add'){
        const newTodo = prompt("Enter new task:");
        myTodoList.push(newTodo);
        console.log(`${newTodo} added to the list.`);
    }else if (input === "delete"){
        const deleteTodo = parseInt(prompt(`Enter index number to delete`));
        if (!Number.isNaN(deleteTodo)){
        const deleted = myTodoList.splice(deleteTodo, 1);
        console.log (`Ok, ${deleted [0]} deleted.`);
        } else {
            console.log('Invalid index.');
        }
    }
    input = prompt ('what would you like to do?');

}

console.log('OK. Quit App.');