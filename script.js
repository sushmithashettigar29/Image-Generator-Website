let btn = document.getElementById("btn");
let input = document.getElementById("animal");
let aniImg = document.getElementById("animalImage");
let detailBox = document.getElementById("detail_container");
let descrip = document.getElementById("description");
let name = document.getElementById("name");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Heyy btn");

  const query = encodeURIComponent(input.value.trim());
  if (!query) {
    alert("Input is empty. Please enter a search term.");
    return;
  }

  const unsplashUrl = `https://api.unsplash.com/photos/random?query=${query}&client_id=YOUR_ACCESS_KEY`;

  fetch(unsplashUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const imgUrl = data.urls.regular;
      const imgDesc = data.alt_description || "No description available";
      aniImg.src = imgUrl;
      name.textContent = input.value.toUpperCase();
      descrip.textContent = imgDesc;
      detailBox.style.display = "flex";
      input.value = "";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      descrip.textContent +=
        "\nSorry, something went wrong with fetching the description.";
    });
});
