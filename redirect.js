// redirect.js

const pageURLs = [
    "android18",
    "android21",
    "azusabro",
    // Add all your HTML pages here
];

function goToRandomPage() {
    // Generate a random index based on the array length
    const randomIndex = Math.floor(Math.random() * pageURLs.length);
    
    // Get the random URL from the array
    const randomURL = pageURLs[randomIndex];
    
    // Redirect the current window to the random URL
    window.location.href = randomURL;
    
    // Optional: Use window.location.replace() if you want to prevent the user from using the "back" button to return to the original page
    // window.location.replace(randomURL);
}
