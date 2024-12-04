
document.addEventListener("DOMContentLoaded", function () {
    const favoritesContainer = document.getElementById("favorites-container");
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = "<p>You don't have any books in your favorites yet.</p>";
        return;
    }

    favorites.forEach(favorite => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("favorite-card");

        const bookImage = bookImages[favorite.title] || 'https://via.placeholder.com/150';

        bookCard.innerHTML = `
            <img src="${bookImage}" alt="${favorite.title}" class="book-image" />
            <div class="card-details">
                <h3>${favorite.title}</h3>
                <button onclick="removeFromFavorites('${favorite.id}')">Remove from favorites</button>
            </div>
        `;

        favoritesContainer.appendChild(bookCard);
    });
});

function removeFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(book => book.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Book removed from favorites!");
    location.reload(); // Recarregar a página para atualizar os favoritos exibidos
}
