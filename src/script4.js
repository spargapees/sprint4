function register(){
    let email = document.getElementById('inputemail');
    let password = document.getElementById('ipnutpassword');
    let fullname = document.getElementById('ipnutname');
    let country = document.getElementById('inputcountry');
    let birthdate = document.getElementById('inputbirthdate');
    let usersList = loadUser();
    usersList.push(
        {
            "email" : email.value,
            "password" : password.value,
            "fullname" : fullname.value,
            "country" : country.value,
            "date" : birthdate.value
        }
    );

    localStorage.setItem("user", JSON.stringify(usersList));

    email.value = "";
    password.value = "";
    fullname.value = "";
    country.value = "";
    birthdate.value = "";
}


function loadUser(){
    let user = localStorage.getItem('user');
    if(user != null){
        let list = JSON.parse(user);
        return list;
    }
    return [];
}

function login(){
    let usersList = loadUser();
    let emailInput = document.getElementById('loginemail');
    let passwordInput = document.getElementById('loginpassword');
    let checked = 0;
    for(let i = 0; i < usersList.length; i++){
        if(usersList[i].email == emailInput.value && usersList[i].password == passwordInput.value){
            localStorage.setItem("id", i);
            window.open("sprint4_3.html", "_self");
            checked = 1;
            break;
        }

    }
    if (checked == 0) alert ('Неверный логин или пароль');


}

function out() {
    window.open("sprint4_2.html");

}

function welcome(){
    let id = localStorage.getItem('id');
    let usersList = loadUser();
    document.getElementById('welcomeuser').innerHTML = usersList[id].fullname;
    document.getElementById('navbarname').innerHTML = usersList[id].fullname;


    document.getElementById('welcomeemail').innerHTML = usersList[id].email;
    document.getElementById('welcomename').innerHTML = usersList[id].fullname;
    document.getElementById('welcomecountry').innerHTML = usersList[id].country;
    document.getElementById('welcomebirth').innerHTML = usersList[id].date;

}
