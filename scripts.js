
const movies = [
  {
    title: "Inception",
    poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    details:
      "Directed by Christopher Nolan, starring Leonardo DiCaprio, Joseph Gordon-Levitt, and Ellen Page.",
  },
  {
    title: "The Dark Knight",
    poster: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg",
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    details:
      "Directed by Christopher Nolan, starring Christian Bale, Heath Ledger, and Aaron Eckhart.",
  },
  {
    title: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    details:
      "Directed by Christopher Nolan, starring Matthew McConaughey, Anne Hathaway, and Jessica Chastain.",
  },
  {
    title: "The Matrix",
    poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    details:
      "Directed by Lana Wachowski, starring Keanu Reeves, Laurence Fishburne, and Carrie-Anne Moss.",
  },
  {
    title: "Pulp Fiction",
    poster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    details:
      "Directed by Quentin Tarantino, starring John Travolta, Uma Thurman, and Samuel L. Jackson.",
  },
];

const movieList = document.getElementById("movieList");
const searchBar = document.getElementById("searchBar");
const movieModal = document.getElementById("movieModal");
const modalDetails = document.getElementById("modalDetails");
const closeButton = document.querySelector(".close-button");

function displayMovies(filteredMovies) {
  movieList.innerHTML = "";
  filteredMovies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" />
            <div class="movie-details">
                <h2 class="movie-title">${movie.title}</h2>
                <p class="movie-description">${movie.description}</p>
            </div>
        `;
    movieCard.addEventListener("click", () => showDetails(movie));
    movieList.appendChild(movieCard);
  });
}

function showDetails(movie) {
  modalDetails.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" />
        <p>${movie.details}</p>
    `;
  movieModal.style.display = "block";
}

function filterMovies() {
  const searchTerm = searchBar.value.toLowerCase();
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );
  displayMovies(filteredMovies);
}

searchBar.addEventListener("input", filterMovies);

closeButton.addEventListener("click", () => {
  movieModal.style.display = "none";
});

// Display all movies initially
displayMovies(movies);
