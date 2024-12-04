document.addEventListener("DOMContentLoaded", function () {
    const favoritesContainer = document.getElementById("favorites-container");

    // Verifica se o usuário está logado
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
        alert("You need to log in to access favorites!");
        window.location.href = "../pages/login.html";
        return;
    }

    // Carrega favoritos do localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = "<p>You don't have favorite books yet!</p>";
        return;
    }

    // Renderiza os livros favoritos
    favorites.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("favorite-card");

        card.innerHTML = `
            <h3>${book.title}</h3>
            <button onclick="removeFromFavorites('${book.id}')">Remove</button>
        `;

        favoritesContainer.appendChild(card);
    });
});

// Função para remover livro dos favoritos
function removeFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(book => book.id !== id);

    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Book removed from favorites!");
    window.location.reload(); // Atualiza a página para refletir as mudanças
}

// Botão de logout
document.getElementById("logout-button").addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    alert("You have been disconnected!");
    window.location.href = "../pages/login.html";
});



// function addToFavorites(bookId) {
//     if(localStorage.getItem("isLoggedIn") !== "true") {
//         aler("Você precisa estar logado para adicionar livros aos favoritos.");
//         window.location.href = "../pages/login.html";
//     } else{
//         let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

//         if(!favorites.includes(bookId)) {
//             favorites.push(bookId);
//             localStorage.setItem("favorites",JSON,stringify(favorites));
//             alert("Livro adicionado aos favoritos!");
//         } else {
//             alert("Este livro já está nos seus favoritos!");
//         }
//     }
// }


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