// 1 Переменные
// const firstName = 'Ilya' // camelCase
// // const lastName = 'Perevozov' // string
// // const age = 27 // number
// const isProgrammer = true // boolean

// const private = 'private'
// const _ = 'some value'
// const $ = 'some'

// const if = 'some' // err

// const withNum5 = '5'

// const 5withNum = '5'// err


// 2 Мутирование 

// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)


// 3 Операторы

// let currentYear = 2023
// const birthYear  = 1995 

// // const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32

// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// console.log(++currentYear)
// console.log(currentYear)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(currentYear--)

// 4 Типы данных

// const isProgrammer = true
// const name = 'Ilya'
// const age = 27
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)
// console.log(null)


// 5 Приоритет операторов
// const fullAge = 27
// const birthYear = 1995
// const currentYear = 2023

// const isFullAge = currentYear - birthYear >= fullAge // 28 >= 27
// console.log(isFullAge)

// 6 Условные операторы

// const courseStatus = 'fail' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }

const isReady = true

// if (isReady){
//     console.log('Готово')
// } else {
//     console.log('Всё не готово')
// }

// Тернарное выражение
// isReady ? console.log('Все готово') : console.log('Все не готово!')

// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 === num2)

// 7 Булевая логика

// const a1 = true && true // true
// const a2 = true && false // false
// const a3 = false && true // false
// const a4 = false && false // false
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)

// const b1 = true || true // true
// const b2 = true || false // true
// const b3 = false || true // true
// const b4 = false || false // false
// console.log(b1)
// console.log(b2)
// console.log(b3)
// console.log(b4)

// const c1 = !true // false
// const c2 = !false // true
// console.log(c1)
// console.log(c2)

// const d1 = !!true// true
// const d2 = !!false // false
// console.log(d1)
// console.log(d2)

// 8 Функции 

// function calculateAge(year) {
//     return 2023 - year
// }

// const myAge = calculateAge(1995)
// console.log(myAge)

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Человек по имени ' + name + ', сейчас ему ' + age + ' лет.')
//     } else {
//         console.log('Не может быть! Вы из будущего ?')
//     }
// }

// logInfoAbout('Ilya', 2022)

// 9 Массивы

// const cars = new Array('Мазда', 'Форд', 'Рено')
// const cars = ['Мазда', 'Форд', 'Рено']

// console.log(cars[0])
// console.log(cars.length)

// cars[0] = 'БМВ'
// cars[cars.length] = 'Пежо'

// console.log(cars)

// 10 Циклы

// const cars = ['Мазда', 'Форд', 'Рено']

// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)
// // }

// for (let car of cars) {
//     console.log(car)
// }

//  11 Объекты

// const person = {
//     firstName: 'Ilya',
//     lastName: 'Perevozov',
//     year: 1993,
//     language: ['Ru','En', 'De'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet')
//     }
// }

// console.log(person.firstName)
// const key = 'language'
// console.log(person[key])
// person.greet()
// console.log(person['lastName']) 
// person.hasWife = true
// console.log(person.hasWife)
// person.isProgrammer = true
// console.log(person)