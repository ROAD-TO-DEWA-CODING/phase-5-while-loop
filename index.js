//? CASE (snake, camel, pascal, kebab)

// let uang = 1_000_000
// console.log(100_000_000 - 1);







//? RECALL if else
// let a = 3

// if (a > 3) {
//     console.log('mantap');
// }
// else if (a >= 3) {
//     console.log('tidak mantap');
// }
// else if (a < 10) {
//     console.log('huha');
// }
// else {
//     console.log('mantul');
// }

// if (a === 3) {
//     console.log("jasjus");
// }






//? switch case
// let a = 7
// switch (a) {
//     case 3:
//         console.log('a itu 3');
//         break;
//     case 4:
//         console.log('a itu 4');
//         break;
//     case 5:
//         console.log('a itu 5');
//         break;
//     default:
//         console.log('a bukan 3 atau 4 atau 5');
//         break;
// }


// let angka = Math.random() * 100 // built-in function
// let int = Math.floor(0.999)
// console.log(int); // 0 - 1




//? While loop
let random = Math.ceil(Math.random() * 10)
let count = 1

while (random !== 10) {
    random = Math.ceil(Math.random() * 10)
    count++
}

console.log('perlu mengambil angka random sebanyak ' + count + ' untuk mendapatkan angka 10');




//? mencari KPK (KELIPATAN PERSEKUTUAN TERKECIL)
let ready = 7, william = 3

while (ready !== william) {
    if (william < ready) william += 3
    else ready += 7
}

console.log(william);