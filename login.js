var saveAcces = [
    {
        username: "admin",
        password: "admin"
    },
    {
        username: "user",
        password: "user"
    },
    {
        username: "widya",
        password: "widya"
    },
    {
        username: "yola",
        password: "yola"
    }
]

//login
function getAcces() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    for (let i = 0; i < saveAcces.length; i++) {
        if (username === saveAcces[i].username && password === saveAcces[i].password) {
            alert(username + " logeddin")
            window.location.href = "index.html"
            return
        }
    }

    alert("incorect username or password")
}

