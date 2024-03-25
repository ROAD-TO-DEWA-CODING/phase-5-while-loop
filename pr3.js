let batman = 7
let superman = 6

while (batman !== superman) {
    if (batman > superman) superman += 6
    else batman += 7

}
let result = superman % 30

let hari = result
switch (hari) {
    case 1,8:
        console.log('superman dan batman akan berjaga bersama lagi di hari senin');
        break;
    case 2,9:
        console.log('superman dan batman akan berjaga bersama lagi di hari selasa');
        break;
    case 3,10:
        console.log('superman dan batman akan berjaga bersama lagi di hari rabu');
        break;
    case 4,11:
        console.log('superman dan batman akan berjaga bersama lagi di hari kamis');
        break;
    case 5,12:
        console.log('superman dan batman akan berjaga bersama lagi di hari jumat');
        break;
    case 6,13:
        console.log('superman dan batman akan berjaga bersama lagi di hari sabtu');
        break;
    default:
        console.log('superman dan batman akan berjaga bersama lagi di hari minggu');
        break;
}
console.log('dan di tanggal ' + result);