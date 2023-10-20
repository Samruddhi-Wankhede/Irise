// Store
// localStorage.setItem("name", JSON.stringify("Value"))

// Retrive 
// JSON.parse(localStorage.getItem("name"))

// Delete 
// localStorage.removeItem("name")

function StoreData(){
    var myClass = {noOfStudents : 30, totalAssignSub: 200};
    localStorage.setItem("userData", JSON.stringify(myClass));
    alert("Data added to LS succesfully.")
    return
}

function RetriveData(){
    const dataFromLS = JSON.parse(localStorage.getItem("userData"));
    console.log(dataFromLS, "data here");
    alert(`${dataFromLS.noOfStudents} - NO OF STUDENTS.`)
    return
}

function DeleteData(){
    localStorage.removeItem("userData");
    alert("data deleted successfully");
}
