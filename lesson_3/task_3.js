// Задание 3. Товары в корзине хранятся в массиве. Задачи:
// a. Организовать такой массив для хранения товаров в корзине;
// b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let shoppingCart = [
    {product: 'name_1', price: 92, count: 5},
    {product: 'name_2', price: 12, count: 7},
    {product: 'name_3', price: 75, count: 2},
    {product: 'name_4', price: 4.5, count: 4},
    {product: 'name_5', price: 5, count: 12}
]

let pdodCost = 0;
let cartPrice = 0;

function countBasketPrice () {

    for (let elem of shoppingCart) {
        prodCost = elem.price*elem.count;
        console.log('Товар ' + elem.product + ' на сумму ' + elem.price*elem.count);
        cartPrice += prodCost;
    };
    console.log('Итого: ' + cartPrice);
}

countBasketPrice () // нужно ли сюда передавать массив shoppingCart, если и без этого считает?