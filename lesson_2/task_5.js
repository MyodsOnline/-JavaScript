// Задание 5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

// let arg_1 = 12;
// let arg_2 = 13;

function addition (arg_1, arg_2){
    return (arg_1 + arg_2);
}

function subtract (arg_1, arg_2){
    return (arg_1 - arg_2);
}

function multiplication (arg_1, arg_2){
    return (arg_1 * arg_2);
}

function division (arg_1, arg_2){
    if (arg_2 == 0) {
        return 'Division by zero is not possible!';
    } else {
        return (arg_1 / arg_2).toFixed(3);
    }
}

add = addition(12, 13)
sub = subtract(12, 13)
mul = multiplication(12, 13)
diz = division(12, 13)

console.log('Сумма = ' + add)
console.log('Разность = ' + sub)
console.log('Умножение = ' + mul)
console.log('Деление = ' + diz)
