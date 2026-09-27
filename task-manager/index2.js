const tasks = []
let completedTaskCount = 0

function setTask(title, destription) {
  return tasks.push({
    title: title, 
    destription: destription || '', 
    isCompleted: false, 
    createdDate: new Date(), 
    completedDate: null})
}
setTask('Сделать зарядку', 'Разминка')
setTask('Сходить в магазин', 'Купить мясо и курицу')

function showTask() {
  if (tasks.length !== 0) {
    return tasks.forEach((item) => 
        console.log(
    `title: ${item.title}, 
    description: ${item.destription}, 
    isCompleted: ${item.isCompleted}, 
    createdDate: ${item.createdDate}, 
    completedDate: ${item.completedDate}
    `))
  } else {
    console.log('Нет задач')
  }
}


function completeTask(index) {
  if (!tasks[index].isCompleted) {
    completedTaskCount++
    tasks[index].completedDate = new Date()
    tasks[index].isCompleted = !tasks[index].isCompleted
  } 
}

function deleteTask(index) {
  if (tasks[index]) {
    if (tasks[index].isCompleted) {
      let result = confirm('Таска еще не выполнена, удалить?')
      if (result) {
        tasks.splice(index, 1)
        completedTaskCount--
      }
    } else if (!tasks[index].isCompleted) {
      tasks.splice(index, 1)
    } 
  } else {
      console.log('Нет задачи с таким индексом')
    }

}

const clearTasks = () => {
  return tasks.length = 0
}
