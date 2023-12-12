document.addEventListener("DOMContentLoaded", function () {
    fetchDogImage();
    fetchJoke();
    fetchBookRecommendation();

    document.getElementById("refreshButton").addEventListener("click", function () {
        fetchDogImage();
        fetchJoke();
        fetchBookRecommendation();
    });
});

function fetchDogImage() {
    axios.get("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            const dogImage = response.data.message;
            displayDogImage(dogImage);
        })
        .catch(error => console.error("Error fetching dog image:", error));
}

function displayDogImage(imageUrl) {
    const dogImageElement = document.getElementById("dogImage");
    dogImageElement.src = imageUrl;
}

function fetchJoke() {
    axios.get("https://v2.jokeapi.dev/joke/Any?type=single")
        .then(response => {
            const joke = response.data.joke;
            displayJoke(joke);
        })
        .catch(error => console.error("Error fetching joke:", error));
}

function displayJoke(joke) {
    const jokeElement = document.getElementById("joke");
    jokeElement.innerText = joke;
}

function fetchBookRecommendation() {
    // You would need to replace 'your-google-books-api-key' with an actual API key
    const apiKey = 'your-google-books-api-key';
    const query = 'programming'; // You can change this query based on your preference

    axios.get(https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey})
        .then(response => {
            const books = response.data.items;
            const randomBook = books[Math.floor(Math.random() * books.length)].volumeInfo;
            displayBookInfo(randomBook);
        })
        .catch(error => console.error("Error fetching book recommendation:", error));
}

function displayBookInfo(bookInfo) {
    const bookInfoElement = document.getElementById("bookInfo");
    bookInfoElement.innerHTML = `
        <h3>${bookInfo.title}</h3>
        <p>Author: ${bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown'}</p>
        <p>Genre: ${bookInfo.categories ? bookInfo.categories.join(', ') : 'Unknown'}</p>
        <p>Description: ${bookInfo.description ? bookInfo.description : 'No description available.'}</p>
    `;
}