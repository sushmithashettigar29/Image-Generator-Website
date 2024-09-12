# Image-Generator-Website
```
# Image Generator Website

This project is an **Image Generator** that allows users to search for images of their favorite animals (or any other query) and display the image along with a brief description. It uses the **Unsplash API** to fetch random images based on the user's search input.

## Demo
You can view the live version of the website here: [Netlify Live Demo](https://your-netlify-link-here)

## Features
- Search for any image by typing a query.
- Fetches a random image related to the search term from the Unsplash API.
- Displays the image with an appropriate description.
- Responsive design for a better user experience across devices.

## Technologies Used
- **HTML5**: For structuring the web page.
- **CSS3**: For styling the page layout and making it responsive.
- **JavaScript**: For handling the search functionality, API requests, and dynamically updating the DOM.
- **Unsplash API**: For fetching images related to the search query.
- **Netlify**: For hosting the website.

## Installation and Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Open the project folder:

   ```bash
   cd your-repository
   ```

3. You can directly open the `index.html` file in your browser or use any local server to run it.

## Usage
1. Enter an animal or any query in the search box.
2. Click on the "Generate Image" button.
3. The page will display an image related to your search and show the description of the image fetched from Unsplash.

## API Integration
This project makes use of the **Unsplash API** to fetch random images. To use it:
- Make sure to replace the `client_id` with your own Unsplash API access key in the `script.js` file.

   ```js
   const unsplashUrl = `https://api.unsplash.com/photos/random?query=${query}&client_id=your-access-key`;
   ```

## Screenshots
Add some screenshots of your project in action here.

## License
This project is licensed under the MIT License.
```
