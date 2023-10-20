var list1=['Kaveri','Sonali','Vivek','Anjali','Akash','Ranjana'];
console.log(list1.sort());

var list2=[10,11,34,36,76,32,92,99];
console.log(list2.sort());

var list3=[10,11,34,36,76,32,92,99,100,300,7900];
list3.sort((a,b) => b-a);
console.log(list3);

list3.sort((a,b) => a-b);
console.log(list3);

var myObject ={StudentNames : ['Sachin','Vivek','Atharva']}

localStorage.setItem("userData", JSON.stringify(myObject));

JSON.parse(localStorage.getItem("userData"));

// var result = JSON.stringify(myObject);
// console.log(result);
// console.log(result.StudentNames);

// result = JSON.parse(  result );
// console.log(result);
// console.log(result.StudentNames);