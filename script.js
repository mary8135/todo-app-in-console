let input = prompt('What would you like to do?');

const myTodoList = ['learn to code', 'stop being poor'];

while (input !== 'quit'){
    if (input === 'list'){
        console.log('**********');
        for(let i = 0; i < myTodoList.length; i++){
            console.log`${i}: ${myTodoList[i]}`;
        }
        console.log('**********');
    }
    input = prompt ('what would you like to do?');

}

console.log('OK. Quit App.');