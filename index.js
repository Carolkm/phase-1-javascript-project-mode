document.addEventListener('DOMContentLoaded', () => {
    // Your JavaScript code goes here
});


const apiKey = 'f5eQtWZTPDOqEZakJJmMAUtoijj66JajXxacNwlqZpU';
const apiUrl = 'https://api.unsplash.com';

async function fetchEnvironmentPhotos() {
    try {
        const searchQuery = 'environment';
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=9`,
            {
                headers: {
                    Authorization: `Client-ID ${apiKey}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching environment photos:', error);
        return [];
    }
}
function displayPhotos(photos) {
    const photoGallery = document.getElementById('photoGallery');
    photoGallery.innerHTML = '';

    photos.forEach((photo) => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.urls.regular;
        imgElement.alt = photo.alt_description;
        photoGallery.appendChild(imgElement);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const environmentPhotos = await fetchEnvironmentPhotos();
        displayPhotos(environmentPhotos);
    } catch (error) {
        console.error('Error loading environment photos:', error);
    }
});



submitButton.addEventListener('click',function(){
    submitReg();
});
function submitReg() {
    alert('registration successful');
}



















  