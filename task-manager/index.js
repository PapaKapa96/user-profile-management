// Step 1
let task = 'Описание задачи'
let completedTaskCount = 0

// Step 2
function showTask() {
  if (task.length !== 0) {
    console.log(task);
  } else {
    console.log('Задача отсутствует');
  }
}

// Step 3
function getTask(taskDescription) {
  if (task.length === 0) {
    task = taskDescription
  } else {
    console.log('Не могу добавить задачу, завершите или удалите редыдущую задачу')
  }
}

// Step 4

function completeTask() {
  if (task.length === 0) {
    console.log('Задача отсутствует');
  } else {
    task = ''
    completedTaskCount++
  }
}

// Step 5

function deleteTask() {
  if (task === '') {
    console.log('Задача отсутствует');
  } else {
    task = ''
  }
}