const users = [
    { email: "nicolle.m.zaleski@gmail.com", password: "cornell" },
    { email: "nicollezaleski@gmail.com", password: "12345" },
    { email: "nicolle@gmail.com", password: "stephenking"}
];

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.email === email && user.password === password);

    if(user){
        alert("Successful login!");
        localStorage.setItem("isLoggedIn","true"); //salvar startus de login
        window.location.href = "../pages/home.html"; //redirecionar
    } else {
        alert("Incorrect email or password!");
    }
});