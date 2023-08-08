document.addEventListener('DOMContentLoaded', async () => {
})
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
        const photoContainer =document.createElement('div');
        photoContainer.className ='photo-container';

        const imgElement = document.createElement('img');
        imgElement.src = photo.urls.regular;
        imgElement.alt = photo.alt_description;

        const likeButton = document.createElement('button');
        likeButton.className = 'like-button';
        likeButton.textContent = 'Like';
        likeButton.addEventListener('click', () => handleLike(photo.id));

        photoContainer.appendChild(imgElement);
        photoContainer.appendChild(likeButton);
        photoGallery.appendChild(photoContainer);
    });
}
function handleLike(photoId) {
    
    console.log(`Liked photo with ID: ${photoId}`);
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const environmentPhotos = await fetchEnvironmentPhotos();
        displayPhotos(environmentPhotos);
    } catch (error) {
        console.error('Error loading environment photos:', error);
    }
});



document.addEventListener('click', (event) => {
    if (event.target.classList.contains('photoGallery img')) {
        const imgUrl = event.target.src;
        displayLargerImage(imgUrl);
    }
});

function displayLargerImage(imgUrl) {

    console.log('Displaying larger image:', imgUrl);
}


const registerInfo= document.querySelector('#registrationForm');
registerInfo.addEventListener('submit', function (event) {
    event.preventDefault()

    console.log('registration complete');
});
function clickButton () {
    document.getElementById('sub').addEventListener(click,function (){
        alert('regestration successful')
    })
}




















  