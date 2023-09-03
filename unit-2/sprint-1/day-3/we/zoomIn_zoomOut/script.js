

const zoomedImage = document.getElementById('zoomed-image');
let scale = 1; // Initial scale factor
const scaleStep = 0.1; // Amount to scale on each scroll event
const minScale = 0.5; // Minimum scale allowed
const maxScale = 2.0; // Maximum scale allowed

// Add a scroll event listener to the image container
document.querySelector('.image-container').addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent the default scrolling behavior

    // Calculate the new scale based on the scroll direction
    if (event.deltaY < 0) {
        // Scrolling up (zoom in)
        scale = Math.min(maxScale, scale + scaleStep);
    } else {
        // Scrolling down (zoom out)
        scale = Math.max(minScale, scale - scaleStep);
    }

    // Apply the new scale to the image
    zoomedImage.style.transform = `scale(${scale})`;
});