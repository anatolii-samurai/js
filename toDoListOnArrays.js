const STATUS = {
    TODO:"To Do",
    IN_PROGRESS:"In Progress" ,   
    DONE:"Done"
}
const PRIORITY = {
LOW: 'low',
HIGH:'high',
MEDIUM:'medium'
}

const list = [ 
	{name: 'create a post', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW}, 
  {name: 'eat', status: STATUS.DONE, priority: PRIORITY.HIGH},
  {name: 'sleep', status: STATUS.DONE, priority: PRIORITY.LOW}, 
  {name: 'sing', status: STATUS.DONE, priority: PRIORITY.HIGH},  
];

function changeStatus(task,status,priority){
  let findTaskIndex = list.findIndex(item => item.name ===task)
  list[findTaskIndex].status = status
  console.log(`Заданию '${task}' присвоен статус '${status}'`);
  list[findTaskIndex].priority = priority
  console.log(`Заданию '${task}' установлен приоритет '${priority}'`);
}


function addTask (task,status = STATUS.TODO,priority = PRIORITY.MEDIUM){
  list.push({name:task,status:status,priority:priority})
  console.log(`Добавлено задание '${task}'`);
}

function deleteTask(task){
  let findTaskIndex = list.findIndex(item => item.name ===task);
  list.splice(findTaskIndex,1)
  console.log(`Удаленно '${task}'`);
}

function showList(){
  let toDo = '';
  let inProgress = '';
  let done = '';
    list.forEach((item)=>{
        
      if(item.status == STATUS.DONE){
        toDo +=`${item.name} \n\t`;
      }else if(item.status == STATUS.IN_PROGRESS) {
        inProgress +=`${item.name} \n\t`;
      }else if(item.status == STATUS.IN_PROGRESS) {
        done +=`${item.name} \n\t`;
      }
    })
    console.log(`To Do:\n\t${toDo}\nIn Progress:\n\t${inProgress}\nDone:\n\t${done}`);
}

changeStatus("sing", STATUS.IN_PROGRESS,PRIORITY.MEDIUM)
addTask('have a walk',STATUS.DONE); // добавляет новую задачу
deleteTask('eat'); // удаляет задачу
showList();
