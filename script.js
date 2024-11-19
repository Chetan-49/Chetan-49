// JavaScript to display detailed news content
function showDetails(newsId) {
    const newsItem = document.getElementById(newsId);
    const detailsDiv = newsItem.querySelector('.details');

    if (detailsDiv.style.display === 'block') {
        detailsDiv.style.display = 'none';
    } else {
        detailsDiv.style.display = 'block';
        detailsDiv.innerHTML = "<p>Here are more details about this news article...</p><p>More content goes here!</p>";
    }
}