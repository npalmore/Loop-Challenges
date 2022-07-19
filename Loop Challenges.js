// Print odds 1-20
for(var i=1; i<20; i+=2) {
    console.log(i);
}
// Decreasing multiples of 3
for(i=100;i>3;i--){
    if (i % 3 == 0) {
        console.log(i);
    }
}
// Print the sequence
for(i=4; i>-4; i-=1.5) {
    console.log(i);
}
// Sigma
var x = 0;
for(var i=1; i<101; i++) {
    x += i;
}
console.log(x);
// Factorial
var product = 1;
for(var i=1; i<13; i++) {
    product *= i;
}
console.log(product);