const add = (a, b, callback) =>
{
    setTimeout(() => {
        callback(a+b)
    },2000)
}

add(5, 1, (sum) => {
    console.log(sum)
})