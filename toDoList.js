const STATUS = {
    TODO:"To Do",
    IN_PROGRESS:"In Progress" ,   
    DONE:"Done"
}
const list = {
	"create a new practice task": STATUS.IN_PROGRESS,
	"make a bed": STATUS.DONE, 
	"write a post": STATUS.TODO,
    "practice task": STATUS.TODO,
    "go home": STATUS.IN_PROGRESS,
}

let changeStatus = (key,status) => list[key] = status
// function changeStatus(key,status){
//     list[key] = status
// }
let addTask = (task,status) =>{
    list[task] = status;
}

let deleteTask = (name) => delete list[name]


function showList(){
    console.log('In progress:');
    for (const key in list){
        if (list[key] === STATUS.IN_PROGRESS ){
            console.log(`\t" ${key}"`);
        }
    }
    
    console.log('Done:');
    for (const key in list){
        if (list[key] === STATUS.DONE ){
            console.log(`\t"${key}"`);
        }
    }
    console.log('To Do:');
    for (const key in list){
        if (list[key] === STATUS.TODO ){
            console.log(`\t"${key}"`);
        }
    }
}

changeStatus("write a post", STATUS.IN_PROGRESS) // меняет статус задачи
addTask('have a walk',STATUS.DONE); // добавляет новую задачу
deleteTask('have a walk'); // удаляет задачу
showList();