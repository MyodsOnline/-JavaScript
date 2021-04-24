// Задание 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
// десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
// ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
// сообщение с помощью console.log и вернуть пустой объект


function getOrder(userNum) {
    let output = [];
    let order = ['сотни: ', 'десятки: ', 'единицы: '];

    if (userNum >= 0 && userNum <= 999) {
        userNum_conv = userNum.toString();
        for (let cnt = userNum_conv.length - 1; cnt >= 0; cnt--){
            output += order[cnt] + userNum_conv[cnt] + '\n';
        }
        return output;
    } else {
        return 'You need to enter a correct number!';
    }
}

function getOrder_2(userNum) {
    if (isNaN(userNum)){
        textContent = 'You need to enter a correct number!';
    } else if (userNum < 0 || userNum > 999){
        textContent = 'You need to enter a correct number!';
    } else {
        textContent =   'еденицы: ' + userNum % 10 + '\n' + 
                        'десятки: ' + Math.floor(userNum / 10 % 10) + '\n' + 
                        'сотни: ' + Math.floor(userNum / 100 % 10);
    }
    return textContent;
}

console.log(getOrder(190))
console.log(getOrder_2(321))

