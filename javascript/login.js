// const form = document.getElementById("form");
// const email = document.getElementById("email");
// const password = document.getElementById("password");

// function showError(input,message){
//     const formControl = input.parentElement;
//     formControl.className = "form-control error"
//     const small = formControl.querySelector("small")
//     small.innerHTML = message
// }
// function showSuccess(input){
//     const formControl = input.parentElement;
//     formControl.className = "form-control success"
// }

// function checkRequired(listaInput){
//     let deuBom = true;
//     listaInput.forEach(function(input){ 
//         console.log(input.value)
//         if(input.value == ""){
//             showError(input,"Campo obrigatório!");
//             deuBom = false;
//         } else{
//             showSuccess (input);
//         }
//     })
//     return deuBom;
// }

// function checkLength(input,min,max) {
//     let deuBom = true;
//     if (input.value.length < min) {
//         showError(input,`Quantidade mínima é ${min}.`);
//         deuBom = false;
//     }
//     else if (input.value.length > max) {
//         showError(input,`Quantidade máxima é ${max}.`);
//         deuBom = false;
//     }
//     else{
//         showSuccess(input);
//     }
//     return deuBom;
// }

// form.addEventListener("submit",function(e) {
//     e.preventDefault()

//     var deuBom = true;
//     deuBom = checkRequired([email,password]);
//     deuBom = checkLength(email,3,15) && deuBom;
//     deuBom = checkLength(password,5,20) && deuBom;
    

//     if(deuBom) {
//         alert("Successful login!");
//         localStorage.setItem("isLoggedIn","true"); //salvar startus de login
//         window.location.href = "../pages/home.html"; //redirecionar
//     } else {
//         alert("Incorrect email or password!");
//     }
// })


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