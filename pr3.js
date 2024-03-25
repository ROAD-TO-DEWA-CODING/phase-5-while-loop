let batman = 6
let superman = 7
let date = 1
let day = 7

while (batman !== superman) {
    if (batman > superman) superman += 7
    else batman += 6
}

date += superman
if (date % 7 !== 0) day = date % 7
if (date % 30 !== 0) date %= 30
else date = 30
console.log(day, date);

switch (day) {
    case 1:
        day = 'senin'
        break;
    case 2:
        day = 'selasa'
        break;
    case 3:
        day = 'rabu'
        break;
    case 4:
        day = 'kamis'
        break;
    case 5:
        day = 'jumat'
        break;
    case 6:
        day = 'sabtu'
        break;
    default:
        day = 'minggu'
        break;
}

console.log(`superman dan batman akan berjaga bersama lagi di hari ${day} tanggal ${date}`);