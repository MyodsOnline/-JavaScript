// Задание 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 — значения аргументов, operation — строка с названием операции.
// В зависимости от переданного значения выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case 1:
            sub = subtract (arg1, arg2);
            console.log(sub);
            break;
        case 2:
            add = addition (arg1, arg2);
            console.log(add);
            break;    
        case 3:
            mul = multiplication (arg1, arg2);
            console.log(mul);
            break;
        case 4:
            diz = division (arg1, arg2);
            console.log(diz);
            break;
    }
}

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


mathOperation(10, 5, 4/*prompt('1 — subtract\n2 — addition\n3 — multiplication\n4 — division')*/)