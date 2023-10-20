function Register(event){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email= document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userData = {userName : name, userNumber : number, userEmail : email, userPassword : password};

    console.log(userData, "-userdata");

    localStorage.setItem("user", JSON.stringify(userData));

    document.getElementById("name").value = '';
    document.getElementById("number").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = "";

    alert("Data added successfully in LS.")
}