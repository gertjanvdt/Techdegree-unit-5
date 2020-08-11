// Declare variables
const images = document.getElementsByTagName('a');
const numberOfImages = images.length;
let input = document.getElementById('search');

// Function to compare search input and image caption
function filterImage() {
    let seachInput = input.value.toUpperCase(); 

    for (let i = 0; i < numberOfImages; i++) {
        let imageCaption = images[i].getAttribute('data-caption').toUpperCase();
        console.log(imageCaption);

        if (imageCaption.indexOf(seachInput) > -1) {
            images[i].style.display = '';        
        } else { images[i].style.display = 'none';
            }
    }
}

// Execute function
filterImage();