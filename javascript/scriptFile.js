function myFunction() {
    if (typeof (Storage) !== "undefined") {
        var username = document.forms["myForm"]["Username"].value;
        var password = document.forms["myForm"]["Password"].value;
        var data = localStorage.getItem('data');
        var jsondata = JSON.parse(data);
        if (jsondata === null) {
            alert("Wrong entry. Please try again :/");
            return false;
        }
        for (var i = 0; i < jsondata.length; i++) {
            if (jsondata[i]["username"] === username && jsondata[i]["password"] === password) {
                return true;
            }
        }
        alert("Wrong entry. Please try again :/");
        return false;
    } else {
        alert("Web storage is not supported on your browser.")
    }

}

function checkRegister() {
    var new_data = new Object();
    new_data.username = document.forms["myForm"]["Username"].value;
    new_data.password = document.forms["myForm"]["Password"].value;
    new_data.email = document.forms["myForm"]["Email"].value;
    new_data.name = document.forms["myForm"]["name"].value;
    new_data.surname = document.forms["myForm"]["surname"].value;
    new_data.studentNo = document.forms["myForm"]["studentNo"].value;
    if (localStorage.data) {
        data = JSON.parse(localStorage.getItem("data"));
    } else {
        data = []
    }
    if (controlRegInfo(new_data)) {
        data.push(new_data);
        localStorage.setItem('data', JSON.stringify(data));
        alert("Registration successful");
        return true;
    } else {
        alert("This username is already being used");
        return false;
    }
}

function controlRegInfo(Object) {
    var check = localStorage.getItem("data");
    var parsed_data = JSON.parse(check);
    if (parsed_data === null) {
        return true;
    }
    for (var i = 0; i < parsed_data.length; i++) {
        if (parsed_data[i]["username"] === Object.username) {
            return false;
        }
    }
    return true;
}

function showPassword() {
    var x = document.getElementById("passwordText");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function show(temp) {
    document.getElementById('display_zone').innerHTML = document.getElementById(temp).innerHTML;

}