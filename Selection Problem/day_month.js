var date=window.prompt("Enter the date");
var month=window.prompt("Enter the month in number");

if(month<=6&&date<=20){
    console.log("True")
}else if(month>=3&&date<6&&(date<31)){
    console.log("True")
}else{
    console.log("False");
}