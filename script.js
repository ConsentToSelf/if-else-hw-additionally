// !7 задание
let number = Number(prompt("Введите число"));
if (number % 2 === 0) {
    console.log("Четное число");
} else if (number % 2 !== 0) {
    console.log("Число нечетное");
} else {
    console.log("Вы ввели неправильное значение");
}


// !8 - 9 задание
let cliensOS = prompt("Введите число своей ОС");
let clientDeviceYear = prompt("Год выпуска вашего телефона");
switch (cliensOS) {
    case "0":
        if (clientDeviceYear < 2015) {
            console.log("Установите облегченную версию IOS по ссылке");
        } else {
            console.log("Установите версию приложения для IOS по ссылке");
        }
        break;
    case "1":
        if (clientDeviceYear < 2015) {
            console.log("Установите облегченную версию Android по ссылке");
        } else {
            console.log("Установите версию приложения для Android по ссылке");
        }
        break;
}