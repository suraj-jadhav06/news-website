async function fetchSportsHeadlines() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=sports&apiKey=0de79cdcd382419cb48fe44e1506ba81`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.articles || data.articles.length === 0) {
            throw new Error("No articles found in response.");
        }

        const newsContainer = document.querySelector('.part1 .news-container');

        // Clear existing headlines before adding new ones
        newsContainer.innerHTML = '';

        // Append the articles to the container
        data.articles.forEach(article => {
            const articleHTML = `
                <div class="news-item">
                    <img src="${article.urlToImage || 'https://via.placeholder.com/15'}" alt="News Image">
                    <span><a href="${article.url}" target="_blank">${article.title}</a></span>
                </div>
            `;
            newsContainer.insertAdjacentHTML('beforeend', articleHTML);
        });
    } catch (error) {
        console.error("Error fetching sports headlines:", error);
    }
}

// Load the sports headlines when the page loads
fetchSportsHeadlines();
