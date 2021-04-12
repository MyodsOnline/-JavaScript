// Задание 5. Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
// x
// xx
// xxx
// xxxx
// xxxxx

let cnt = 20; // в отдельную переменную вынес умышленно, чтобы код был универсальным.

console.log('\nwith for and array')
let arr = [];
for (i = 1; i <= cnt; i++) {
    arr.push('*');
    console.log(arr);
}

console.log('\nwith while and string')
let str = '*';
let j = 1;
while (j <= cnt) {
    console.log(str);
    str += '*';
    j++;
}