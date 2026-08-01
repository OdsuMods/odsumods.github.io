let users = [];

fetch("users.json")
.then(r => r.json())
.then(data => {
    users = data.users;
});

function login(){

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u =>
        u.username === username &&
        u.password === password
    );

    if(!user){
        document.getElementById("status").innerText = "Invalid login.";
        return;
    }

    if(!user.verified){
        document.getElementById("status").innerText = "Account not verified.";
        return;
    }

    document.getElementById("status").innerText = `Welcome ${user.username}!`;

    if(user.admin){
        document.getElementById("adminPanel").style.display = "block";
    }
}
