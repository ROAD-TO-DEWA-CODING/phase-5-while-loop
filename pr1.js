let bintang = ''
let count = 1
for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3 - row; col++) {
        bintang += count;
        count ++
    }
    bintang += '\n'
}
console.log(bintang);