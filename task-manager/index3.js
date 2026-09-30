let tasks = []
let completedTaskCount = 0

function setTask(title, description) {
  return tasks.push({
    title: title, 
    description: description || '', 
    isCompleted: false, 
    createdDate: new Date(), 
    completedDate: null})
}
setTask('Сделать зарядку', 'Разминка')
setTask('Сходить в магазин', 'Купить мясо и курицу')
setTask('Бегать', 'На улице или в зале')
setTask('Бег', 'На улице')


function showTask() {
  if (tasks.length !== 0) {
    return tasks.forEach((item) => 
        console.log(`
    title: ${item.title}, 
    description: ${item.description}, 
    isCompleted: ${item.isCompleted}, 
    createdDate: ${item.createdDate}, 
    completedDate: ${item.completedDate}`
  ))
  } else {
    console.log('Нет задач')
  }
}

const getTaskDesktiptions = () => {
  return tasks.map((task) => task.description)
}

const getLongTask = () => {
  return tasks.filter((task) => task.title.length > 10)
}

const getTasksByDateRange = (startDate, endDate, isCompleted = false) => {
  return tasks.filter((task) => 
    task.createdDate.getTime() >= new Date(startDate).getTime() && 
    task.createdDate.getTime() <= new Date(endDate).getTime()).filter((task) => 
    task.isCompleted === isCompleted)
}

const clearShortTasks = () => {
  const notShortTask = tasks.filter((task) => task.title.length >= 5)
  return tasks = notShortTask
}

const editTitle = (index, newTitle) => {
  return tasks[index].title = newTitle
}

const completeTasks = (index) => {
  const complete = tasks.find((task, i) => i === index)
  complete.isCompleted = true
  complete.completedDate = new Date()
  completedTaskCount++
}
console.log(completeTasks(1))
console.log(showTask())