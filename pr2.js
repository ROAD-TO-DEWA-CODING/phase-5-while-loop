let row = 10, col = 10
for (let i = 0; i < col; i++) {
    let bintang = ''
    for (let j = 0; j < row; j++) {
        if (i === 0 || i + 1 === col || j === 0 || j + 1 === row) {
            bintang += '* '
        }
        else bintang += '  '
    }
    console.log(bintang);
}