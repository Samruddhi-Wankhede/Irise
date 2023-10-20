var n1 = 23;
var n2 = 78;
var n3 = 67;
if(n1%2==0){
    console.log(`${n1} is even`)

    if(n2%2==0){
        console.log(`${n2} is even`);
    }
    else{
        console.log(`${n2} is odd`);
    }
}
else{
    console.log(`${n1} is odd`);
    if(n3%2==0){
        console.log(`${n3} is even`);
    }
    else{
        console.log(`${n3} is odd`);
    }
}