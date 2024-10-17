// Function to filter videos based on search input
function searchVideos() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const videos = document.getElementsByClassName('video-item');

    // Loop through each video and show/hide based on search term
    for (let i = 0; i < videos.length; i++) {
        const title = videos[i].getAttribute('data-title').toLowerCase();
        if (title.includes(searchTerm)) {
            videos[i].style.display = 'block';  // Show the video if it matches the search
        } else {
            videos[i].style.display = 'none';  // Hide the video if it doesn't match
        }
    }
}
