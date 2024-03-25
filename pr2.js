let bintang = ''

for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
        if (row === 0 || row === 4) {
            bintang += '* '
        }
        else if ((row === 1 && col === 0) || (row === 1 && col === 4)) {
            bintang += '* '
        }
        else if ((row === 2 && col === 0) || (row === 2 && col === 4)) {
            bintang += '* '
        }
        else if ((row === 3 && col === 0) || (row === 3 && col === 4)) {
            bintang += '* '
        }
        else {
            bintang += "  "
        }
    }
    bintang += '\n'
}
console.log(bintang);