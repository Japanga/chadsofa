// replacetext.js
 
function replaceParagraphContent(fileUrl, elementId) {
    // Use the Fetch API to get the content of the text file
    fetch(fileUrl)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Read the response as plain text
            return response.text();
        })
        .then(textData => {
            // Find the target paragraph element by its ID
            const paragraphElement = document.getElementById(elementId);
            if (paragraphElement) {
                // Replace the element's text content with the data from the file
                // Using textContent is safer than innerHTML for plain text
                paragraphElement.textContent = textData;
            } else {
                console.error(`Element with ID "${elementId}" not found.`);
            }
        })
        .catch(error => {
            console.error('Error fetching the external text file:', error);
        });
}

// Call the function when the script loads (the 'defer' attribute ensures the DOM is ready)
replaceParagraphContent('content.txt', 'replace-me');
