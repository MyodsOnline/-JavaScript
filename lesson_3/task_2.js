// Задание 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

let shoppingCart = [
    {product: 'name_1', price: 92, count: 5},
    {product: 'name_2', price: 12, count: 7},
    {product: 'name_3', price: 75, count: 2},
    {product: 'name_4', price: 4.5, count: 4},
    {product: 'name_5', price: 5, count: 12}
]

let cartPrice = 0;

function calculatingCost () {
    shoppingCart.forEach(val => console.log('Товар ' + val.product + ' на сумму ' + val.count * val.price));

    for (let elem of shoppingCart) {
        cartPrice += elem.price * elem.count;
    };
    console.log('Итого (через for of): ' + cartPrice);

    let cartCostCalculate = shoppingCart.reduce(function (acc, cost) {
        return acc + cost.price * cost.count;
    }, 0);
    console.log('Итого (через reduce): ' + cartCostCalculate);
}

calculatingCost()




