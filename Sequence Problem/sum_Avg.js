var random = Math.floor(Math.random()*100);
var sum=0;
for(let i=0;i<=5;i++){
    sum+=random;
}
let avg = sum/5;
console.log("Total:"+sum)
console.log("Avg :"+avg)