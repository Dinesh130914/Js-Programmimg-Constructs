let a=Math.floor(Math.random()*1000);
let b=Math.floor(Math.random()*1000);
let c=Math.floor(Math.random()*1000);
let d=Math.floor(Math.random()*1000);
let e=Math.floor(Math.random()*1000);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

var min =0;
var max=a;

if(min<a){
    min=a;
}
if(min<b){
    min=b;
}
if(min<c){
    min=c;
}
if(min<d){
    min=d
}
if(min<e){
    min=e
}
console.log("The maximum number is "+min)
if(max>b){
    max=b;
}
if(max>c){
    max=c;
}
if(max>d){
    max=d;
}
if(max>e){
    max=e
}

console.log("The minimum number is "+max)
