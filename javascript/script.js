const apiUrl = "https://stephen-king-api.onrender.com/api/books";



// Função para buscar livros aleatórios ou pesquisar por nome
async function fetchBooks(query = "") {
    try {
        const response = await fetch("https://stephen-king-api.onrender.com/api/books");
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const result = await response.json();
        const data = result.data;

        if (Array.isArray(data)) {
            let books = data.slice(0,63);
            if(query) {
                books = books.filter (book =>
                    book.Title.toLowerCase().includes(query.toLowerCase())
                );
            }
            renderCards (books);
        } else {
            throw new Error('The "data" property is not an array!')
        }
    } catch (error) {
        console.log('Error when searching for books:',error.message);
    }
}

const bookImages = {
    "Carrie": "https://m.media-amazon.com/images/I/81SVJuNeq8L._AC_UF1000,1000_QL80_.jpg",
    "Salem's Lot": "https://m.media-amazon.com/images/I/91-vLghDChL._AC_UF1000,1000_QL80_.jpg",
    "Doctor Sleep": "https://m.media-amazon.com/images/I/71dQ92+vTHL._AC_UF894,1000_QL80_.jpg",
    "The Shining": "https://m.media-amazon.com/images/I/81CuEX3W9UL._AC_UF894,1000_QL80_.jpg",
    "Rage": "https://m.media-amazon.com/images/I/51WPrmvbNSL._AC_UF1000,1000_QL80_.jpg",
    "The Stand": "https://m.media-amazon.com/images/I/71-Hcgk9ErL._AC_UF894,1000_QL80_.jpg",
    "The Long Walk": "https://m.media-amazon.com/images/I/81cW2xNlv8L._AC_UF1000,1000_QL80_.jpg",
    "The Dead Zone": "https://m.media-amazon.com/images/I/51l4OLvTGgL._AC_UF1000,1000_QL80_.jpg",
    "Firestarter": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Firestarter_%281980%29_front_cover%2C_first_edition.jpg",
    "Roadwork": "https://m.media-amazon.com/images/I/81P0edyQh9L._AC_UF1000,1000_QL80_.jpg",
    "Cujo": "https://m.media-amazon.com/images/I/91Y8zTiwlUL._AC_UF894,1000_QL80_.jpg",
    "The Running Man": "https://m.media-amazon.com/images/I/811cUzLWLaL._AC_UF1000,1000_QL80_.jpg",
    "The Dark Tower: The Gunslinger": "https://m.media-amazon.com/images/I/71LOqN4EvIL._AC_UF894,1000_QL80_.jpg",
    "Christine": "https://m.media-amazon.com/images/I/81kV4ZFR6TL._UF894,1000_QL80_.jpg",
    "Pet Sematary": "https://m.media-amazon.com/images/I/81Oth+TV0dL._AC_UF1000,1000_QL80_.jpg",
    "Cycle of the Werewolf": "https://m.media-amazon.com/images/I/71XbWSQLlrL._AC_UF894,1000_QL80_.jpg",
    "The Talisma": "https://m.media-amazon.com/images/I/81Dqkr8H0LL._AC_UF1000,1000_QL80_.jpg",
    "The Eyes of the Dragon": "https://m.media-amazon.com/images/I/819azRRCZyL.jpg",
    "Thinner": "https://m.media-amazon.com/images/I/71dUC6EbejL.jpg",
    "The Dark Tower II: The Drawing of the Three": "https://m.media-amazon.com/images/I/91PHYFSBgfL.jpg",
    "Misery": "https://upload.wikimedia.org/wikipedia/commons/1/14/Misery_%281987%29_front_cover%2C_first_edition.jpg",
    "The Tommyknockers": "https://m.media-amazon.com/images/I/814EEAhqkpL._UF894,1000_QL80_.jpg",
    "The Dark Half": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1430122353i/11597.jpg",
    "The Dark Tower III: The Waste Lands": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532334476l/34084.jpg",
    "Needful Things": "https://m.media-amazon.com/images/I/61aaI2CdY3L._AC_UF1000,1000_QL80_.jpg",
    "Gerald's Game": "https://m.media-amazon.com/images/I/81D1MekgL2L._AC_UF894,1000_QL80_.jpg",
    "Dolores Claiborne": "https://m.media-amazon.com/images/I/61q7GFmBnJL._AC_UF1000,1000_QL80_.jpg",
    "Insomnia": "https://m.media-amazon.com/images/I/81ahPQ4PcSL._UF894,1000_QL80_.jpg",
    "Rose Madder": "https://m.media-amazon.com/images/I/81vH06h9S4L._AC_UF1000,1000_QL80_.jpg",
    "The Dark Tower IV: Wizard and Glass": "https://m.media-amazon.com/images/I/71XDBpEmYHL._UF894,1000_QL80_.jpg",
    "Black House": "https://m.media-amazon.com/images/I/81dlp6luQHL._AC_UF894,1000_QL80_.jpg",
    "From a Buick 8": "https://m.media-amazon.com/images/I/814+X0-ea6L.jpg",
    "The Dark Tower V: Wolves of the Calla": "https://m.media-amazon.com/images/I/91tPFTruTFL._AC_UF1000,1000_QL80_.jpg",
    "The Dark Tower VI: Song of Susannah": "https://m.media-amazon.com/images/I/91afbsPeg+L._UF894,1000_QL80_.jpg",
    "The Dark Tower VII: The Dark Tower": "https://m.media-amazon.com/images/I/914IuzI3++L._UF894,1000_QL80_.jpg",
    "The Colorado Kid": "https://m.media-amazon.com/images/I/81tacbjc8ML._UF894,1000_QL80_.jpg",
    "Cell": "https://m.media-amazon.com/images/I/61tzbleToFL._AC_UF1000,1000_QL80_.jpg",
    "Lisey's Story": "https://m.media-amazon.com/images/I/710M7TdNurL.jpg",
    "Under the Dome": "https://m.media-amazon.com/images/I/81BIniNN9oL._AC_UF894,1000_QL80_.jpg",
    "The Dark Tower: The Wind Through the Keyhole": "https://m.media-amazon.com/images/I/91xib2N15WL._UF894,1000_QL80_.jpg",
    "Joyland": "https://m.media-amazon.com/images/I/81xkL3UroYL._AC_UF1000,1000_QL80_.jpg",
    "Doctor Sleep": "https://m.media-amazon.com/images/I/71dQ92+vTHL._AC_UF894,1000_QL80_.jpg",
    "It": "https://m.media-amazon.com/images/I/61pjyMrRCSL._AC_UF1000,1000_QL80_.jpg",
    "The Talisman": "https://m.media-amazon.com/images/I/81Dqkr8H0LL._AC_UF1000,1000_QL80_.jpg",
    "The Stand Uncut": "https://m.media-amazon.com/images/I/71-FDq0U76L._AC_UF1000,1000_QL80_.jpg",
    "The Green Mile": "https://m.media-amazon.com/images/I/91pm+oEatJL.jpg",
    "Desperation": "https://m.media-amazon.com/images/I/91Xdkod41aL._AC_UF894,1000_QL80_.jpg",
    "The Regulators": "https://m.media-amazon.com/images/I/81G0go-k+2L._AC_UF1000,1000_QL80_.jpg",
    "Bag of Bones": "https://m.media-amazon.com/images/I/71DsfiTEugL._AC_UF1000,1000_QL80_.jpg",
    "The Girl Who Loved Tom Gordon": "https://m.media-amazon.com/images/I/91KS9+EfF+L._AC_UF894,1000_QL80_.jpg",
    "Dreamcatcher": "https://m.media-amazon.com/images/I/91Lv21wOG8L._UF894,1000_QL80_.jpg",
    "Blaze": "https://m.media-amazon.com/images/I/71DL-3oS7qL._AC_UF894,1000_QL80_.jpg",
    "Duma Key": "https://m.media-amazon.com/images/I/81trQx4qJdL._UF894,1000_QL80_.jpg",
    "11/22/63": "https://m.media-amazon.com/images/I/717e5mrJz+L.jpg",
    "Mr. Mercedes": "https://m.media-amazon.com/images/I/81-yibEueDL._AC_UF1000,1000_QL80_.jpg",
    "Revival": "https://m.media-amazon.com/images/I/81PaljyJOKL._AC_UF1000,1000_QL80_.jpg",
    "Finders Keepers": "https://m.media-amazon.com/images/I/81kL+XBSbHL._AC_UF1000,1000_QL80_.jpg",
    "End of Watch": "https://m.media-amazon.com/images/I/81lPHXF7E0L._AC_UF1000,1000_QL80_.jpg",
    "Gwendy's Button Box": "https://m.media-amazon.com/images/I/91cftc0wBIL._AC_UF1000,1000_QL80_.jpg",
    "Sleeping Beauties": "https://m.media-amazon.com/images/I/71DXYcOBR7L._AC_UF1000,1000_QL80_.jpg",
    "The Outsider": "https://m.media-amazon.com/images/I/91YVPs88hjL._AC_UF894,1000_QL80_.jpg",
    "Elevation": "https://m.media-amazon.com/images/I/81LEr3mj91L.jpg",
    "The Institute": "https://m.media-amazon.com/images/I/71s6siGLrFL._AC_UF1000,1000_QL80_.jpg",
    "Later": "https://m.media-amazon.com/images/I/81EkmsU-OoL._AC_UF1000,1000_QL80_.jpg",
    "Billy Summers": "https://m.media-amazon.com/images/I/81Ln0WUmxzL._AC_UF894,1000_QL80_.jpg"
  };


// Função para exibir os cards dos livros
function renderCards(books) {
    const container = document.getElementById("books-container");
    container.innerHTML = ""; // Limpar cards anteriores

    books.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");

        const bookImage = bookImages[book.Title] || 'https://via.placeholder.com/150';

        card.innerHTML = `
            <img src="${bookImage}" alt="${book.Title}" class="book-image" />
            <div class="card-details">
                <h3>${book.Title}</h3>
                <p>Year: ${book.Year}</p>
                <p>Pages: ${book.Pages}</p>
                <p>ISBN: ${book.ISBN}</p>
                <button onclick="addToFavorites('${book.id}', '${book.Title}')">Add to favorites</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função para adicionar um livro aos favoritos
function addToFavorites(id, title) {
    const user = localStorage.getItem("isLoggedIn");
    if (!user) {
        alert("You need to log in to add to favorites!");
        return;
    }

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some(book => book.id === id)) {
        favorites.push({ id, title });
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Book added to favorites!");
    } else {
        alert("Book is already in favorites.");
    }
}

// Função para lidar com a pesquisa
function searchBooks() {
    const query = document.getElementById("search").value.trim();
    if (query) {
    fetchBooks(query);
    } else {
        fetchBooks();
    }
}

// Inicializar a página com livros aleatórios
fetchBooks();

