# Image Generator Website
This project is an Image Generator that allows users to search for images of their favorite animals (or any other query) and display the image along with a brief description. It uses the Unsplash API to fetch random images based on the user's search input.

# Demo
You can view the live version of the website here: Netlify Live Demo

# Features

1.Search for any image by typing a query.
2.Fetches a random image related to the search term from the Unsplash API.
3.Displays the image with an appropriate description.
4.Responsive design for a better user experience across devices.

# Technologies Used

1.HTML5: For structuring the web page.
2.CSS3: For styling the page layout and making it responsive.
3.JavaScript: For handling the search functionality, API requests, and dynamically updating the DOM.
4.Unsplash API: For fetching images related to the search query.
5.Netlify: For hosting the website.

Installation and Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repository.git
Open the project folder:

bash
Copy code
cd your-repository
You can directly open the index.html file in your browser or use any local server to run it.

Usage
Enter an animal or any query in the search box.
Click on the "Generate Image" button.
The page will display an image related to your search and show the description of the image fetched from Unsplash.
API Integration
This project makes use of the Unsplash API to fetch random images. To use it:

Make sure to replace the client_id with your own Unsplash API access key in the script.js file.
js
Copy code
const unsplashUrl = `https://api.unsplash.com/photos/random?query=${query}&client_id=your-access-key`;
Screenshots
Add some screenshots of your project in action here.

License
This project is licensed under the MIT License.
