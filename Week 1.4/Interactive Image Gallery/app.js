// Image Data Array
const images = [
    { fullSize: 'images/image1.png', thumbnail: 'images/image1.png', caption: 'Kakashi Hatake' },
    { fullSize: 'images/image2.jpg', thumbnail: 'images/image2.jpg', caption: 'Kaneku Ken' },
    { fullSize: 'images/image3.jpg', thumbnail: 'images/image3.jpg', caption: 'MHA' },
    { fullSize: 'images/image4.jpg', thumbnail: 'images/image4.jpg', caption: 'Itachi Uchiha' },
    { fullSize: 'images/image5.jpg', thumbnail: 'images/image5.jpg', caption: 'Naruto Uzumaki' },
    { fullSize: 'images/image6.png', thumbnail: 'images/image6.png', caption: 'GOKU' }
];

let currentIndex = 0;

// Function to create and display thumbnails dynamically
function loadGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.thumbnail;
        imgElement.alt = image.caption;
        imgElement.classList.add('thumbnail');
        imgElement.addEventListener('click', () => openLightbox(index));
        galleryContainer.appendChild(imgElement);
    });
}

// Open the lightbox with the selected image
function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const caption = document.getElementById('caption');
    lightboxImage.src = images[index].fullSize;
    caption.textContent = images[index].caption;
    lightbox.style.display = 'flex';
    updateNavigationButtons();
}

// Close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Update Next/Previous buttons based on current index
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

// Navigate to the next image
function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        openLightbox(currentIndex);
    }
}

// Navigate to the previous image
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        openLightbox(currentIndex);
    }
}

// Event Listeners for buttons
document.getElementById('close').addEventListener('click', closeLightbox);
document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);

// Initialize the gallery when the page loads
window.onload = loadGallery;
