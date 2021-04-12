// Задание 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let num = 0;

while (num <= 100) {
    let check = true;
    for (let cnt = 2; cnt < num; cnt++){
        if (num % cnt == 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(num);
    num++;
}