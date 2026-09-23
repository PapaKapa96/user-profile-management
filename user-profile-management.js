 // Step 1
 const name = 'Alex'
 const age = 25
 const subscription = 'premium' // free | basic | premium
 const lastLogin = 22 // 0-23

// Step 2
function validateAge(age) {
  if (typeof age !== 'number') {
    console.log('Возраст не может быть набором символов');
    return false 
  } 
  else if (age <= 0) {
    console.log('Возраст не может быть равен 0 или отрицательному значению');
    return false 
  } 
  else {
    return true
  }
}

const validateName = function(name) {
  if (typeof name !== 'string') {
    console.log('Имя не может быть набором чисел');
    return false
  } 
  else if (name.length === 0) {
    console.log('Имя не может быть пустым');
    return false
  }
  else {
    return true
  }
}

const validateSubscription = (subscription) => {
  if (subscription === 'free' || 
      subscription === 'basic' || 
      subscription === 'premium') {
        return true
  } 
  else {
    console.log('Неверное значение подписки');
    return false
  }
}

// Step 3
function getTimeOfDay(lastLogin) {
  if (lastLogin < 0 || lastLogin > 23) return 'Некорректное значение времени'
  return lastLogin >= 5 && lastLogin <= 11 ? 
    'утро' : 
    lastLogin >= 12 && lastLogin <= 17 ? 
    'день' : 
    lastLogin >= 18 && lastLogin <= 21 ?
    'вечер' : 'ночь'
}

// Step 4
function getAccessLevel(subscription) {
  if (subscription === null || subscription === undefined) return null
  if (subscription === 'premium') {
    return 'Полный доступ' 
  } 
  else if (subscription === 'basic') {
    return 'Ограниченный доступ'
  } 
  else if (subscription === 'free') {
    return 'Доступ только к бесплатному контенту'
  } 
  else {
    return 'У вас нет активной подписки'
  }
}

// Step 5
function displayUserInfo() {
  if (validateAge(age) && validateName(name) && validateSubscription(subscription)) {
    const timeOfDay = getTimeOfDay(lastLogin)
    const accessLevel = getAccessLevel(subscription)

    console.log(`Привет, ${name}! Вам ${age} лет. Сейчас ${timeOfDay}. Уровень доступа: ${accessLevel}.`);
    if (age < 18) {
      console.log('Вы несовершеннолетний пользователь.')
    }
    if (lastLogin <= 5 || lastLogin >= 22) {
      console.log('Позднее время для входа.');
    }

    let bonus = age % 10
    bonus += 5
    console.log(`Ваш бонус равен: ${bonus}`); 
  } else {
    console.log('Предоставлена неверная информация')
  }
}



displayUserInfo()
