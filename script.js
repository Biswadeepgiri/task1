
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Render images
        renderImages(data);
    })

    .catch(err => console.error('Error loading images', err));

function renderImages(imagesJson) {
    const imageContainer = document.getElementById('image-container');
    imagesJson.forEach((item) => {
        const imgElement = document.createElement('img');
        imgElement.src = item.image;
        imageContainer.appendChild(imgElement);
    });
}