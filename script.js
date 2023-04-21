const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "-Z5OwcJvlYx7YN6Sjz7lgUPAK9qv-qO716HZ4lQfuWw";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();

    console.log(photosArray);
  } catch (error) {
    //  Catch error here
    console.log("there was an error", error);
  }
}
// on load
getPhotos();
