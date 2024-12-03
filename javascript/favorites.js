function addToFavorites(bookId) {
    if(localStorage.getItem("isLoggedIn") !== "true") {
        aler("Você precisa estar logado para adicionar livros aos favoritos.");
        window.location.href = "../pages/login.html";
    } else{
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if(!favorites.includes(bookId)) {
            favorites.push(bookId);
            localStorage.setItem("favorites",JSON,stringify(favorites));
            alert("Livro adicionado aos favoritos!");
        } else {
            alert("Este livro já está nos seus favoritos!");
        }
    }
}

// function showFavorites() {
//     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     const container = document.getElementById("favorites-list");
//     container.innerHTML = "";

//     favorites.forEach(book => {
//         const item = document.createElement("div");
//         item.innerHTML = `
//             <h3>${book.title}</h3>
//             <button onclick="removeFromFavorites('${book.id}')">Remover</button>
//         `;
//         container.appendChild(item);
//     });
// }

// function removeFromFavorites(id) {
//     let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     favorites = favorites.filter(book => book.id !== id);
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//     showFavorites();
// }