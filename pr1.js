let count = 1
for (let row = 0; row < 3; row++) {
    let result = ''
    for (let col = 0; col < 3 - row; col++) {
        result += count;
        count ++
    }
    console.log(result);
}
