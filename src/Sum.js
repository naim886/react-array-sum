const Sum = (array) => {
    let sum = 0
    array.forEach(function (item) {
        sum += item;
    })
    return sum
}
export default Sum