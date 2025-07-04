const searchForm = document.getElementById('siteSearchForm');
    const searchInput = document.getElementById('moaz');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        const query = searchInput.value.trim();
        if (query) {
            // Redirect to a search results page, passing the query
            window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('query');
    const resultsContainer = document.getElementById('searchResults'); // Assuming an element to display results

    if (searchQuery) {
        // Here, you would implement the logic to search your site's content.
        // This could involve:
        // 1. Client-side search of a pre-indexed JSON object containing page data.
        // 2. Making an AJAX request to a server-side endpoint that performs the search.
        resultsContainer.innerHTML = `Searching for: "${searchQuery}"...`;
        // ... display actual search results here
    } else {
        resultsContainer.innerHTML = "Please enter a search query.";
    }