let year=Math.floor(Math.random()*10000);
console.log(year);

let a=year%4;
let b=year%100;
let c=year%400;

if(a==0&&b==0&&c==0){
    console.log(year+"is leap year")
}else{
    console.log(year+"not a leap year")
    
}