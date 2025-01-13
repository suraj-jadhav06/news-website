// Initialize EmailJS with your user ID
(function () {
    emailjs.init("YOUR_EMAILJS_USER_ID");
})();

// --- Pop-up Functions ---
// Function to show pop-ups
function showPopup(popupId) {
    document.getElementById(popupId).classList.add('show');
}

// Function to close pop-ups
function closePopup(popupId) {
    document.getElementById(popupId).classList.remove('show');
}

// Show regret message for 5-8 seconds
function showRegretMessage() {
    showPopup('regret-popup');
    setTimeout(() => closePopup('regret-popup'), 2000); // 8 seconds
}

// --- Navigation Event Listeners ---
// Navigation event listeners for News and other options
document.querySelectorAll('.nav-item a').forEach((navItem, index) => {
    navItem.addEventListener('click', (event) => {
        event.preventDefault();
        if (index === 0) {
            showPopup('news-popup');
        } else {
            alert('Functionality coming soon!');
        }
    });
});

// --- Pop-up Event Listeners ---
document.getElementById('option3').addEventListener('click', () => showPopup('games-popup'));
document.getElementById('option4').addEventListener('click', showRegretMessage);

document.getElementById('option5').addEventListener('click', showRegretMessage);

// --- Function to initiate Gmail login ---
function loginViaGmail() {
    const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Your Google client ID
    const redirectUri = 'YOUR_REDIRECT_URI'; // Your redirect URI
    const scope = 'email profile'; // Request access to email and profile

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
    window.location.href = authUrl; // Redirect to Google login
}

// --- News Filtering ---
// Function to filter newspapers based on country selection
function filterNewspapers() {
    const filterValue = document.getElementById('country-filter').value;
    const newspapers = document.querySelectorAll('.newspaper-item');

    newspapers.forEach((newspaper) => {
        newspaper.style.display = (filterValue === 'all' || newspaper.classList.contains(filterValue)) ? 'list-item' : 'none';
    });
}

// --- News Search ---
/// API key and URL for news search
const API_KEY = '0de79cdcd382419cb48fe44e1506ba81'; // Your valid API key
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=`;



document.getElementById("myButton").addEventListener("click", function () {
    window.location.href = "index.html"; // Replace with your target HTML file name
});

document.getElementById("login").addEventListener("click", function () {
    window.location.href = "index.log.html"; // Replace with your target HTML file name
});

document.getElementById("do").addEventListener("click", function () {
    // Save the search query in localStorage so it can be accessed on the next page
    const query = document.getElementById('search-box').value;
    localStorage.setItem('searchQuery', query);

    // Redirect to the search results page (replace with the correct file name)
    window.location.href = "search-data.html";
});

// Existing JavaScript code...






