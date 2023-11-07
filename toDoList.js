const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done", 
	"write a post": "Done",
    "practice task": "In Progress",
    "go home": "To Do"
}

function changeStatus(name,status){
    list[name] = status
}
function addTask(name){
    list[name] = name;
}

function deleteTask(name){
    delete list[name]
}

function showList(){
    console.log('In progress:');
    for (const key in list){
        if (list[key] === "In Progress" ){
            console.log(`\t" ${key}"`);
        }
    }
    
    console.log('Done:');
    for (const key in list){
        if (list[key] === "Done" ){
            console.log(`\t"${key}"`);
        }
    }
    console.log('To Do:');
    for (const key in list){
        if (list[key] === "To Do" ){
            console.log(`\t"${key}"`);
        }
    }
}

changeStatus("write a post", "Done") // меняет статус задачи
addTask('have a walk'); // добавляет новую задачу
deleteTask('have a walk'); // удаляет задачу
showList();