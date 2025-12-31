// replacetext.js
// Function to fetch the text file content and update the paragraph
function replaceParagraphContent() {
    // Specify the path to your external text file
    const textFilePath = 'https://japanga.github.io/chadsofa/external_content.txt';
    const paragraphId = 'content-paragraph';

    fetch(textFilePath)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Parse the response as plain text
            return response.text();
        })
        .then(data => {
            // Find the paragraph element and update its content
            const paragraphElement = document.getElementById(paragraphId);
            if (paragraphElement) {
                paragraphElement.textContent = data;
            } else {
                console.error(`Element with ID "${paragraphId}" not found.`);
            }
        })
        .catch(error => {
            console.error('Error fetching the text file:', error);
            const paragraphElement = document.getElementById(paragraphId);
            if (paragraphElement) {
                paragraphElement.textContent = 'Failed to load external content.';
            }
        });
}

// Call the function when the script runs (which happens after the DOM is ready due to 'defer')
replaceParagraphContent();
