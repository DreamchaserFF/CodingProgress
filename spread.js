function giveMeFour(a,b,c,d) {
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
    console.log("d", d)
}

const colors = ["red", "orange", "yello", "green"]
console.log(giveMeFour(...colors));

const str = "BOSS"
console.log(giveMeFour(...str));