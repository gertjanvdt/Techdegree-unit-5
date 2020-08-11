// Declare variables
const images = document.getElementsByTagName('a');
const numberOfImages = images.length;
console.log(numberOfImages);
let input = document.getElementById('search');
console.log(input);

// Function to compare search input and image caption
function filterImage() {
    let seachInput = input.value.toUpperCase(); 
    // seachInput = 'HAY';
    // console.log(seachInput);

    for (let i = 0; i < numberOfImages; i++) {
        let imageCaption = images[i].getAttribute('data-caption').toUpperCase();
        console.log(imageCaption);

        if (imageCaption.indexOf(seachInput) > -1) {
            images[i].style.display = '';        
        } else { images[i].style.display = 'none';
            }
    }
}

// Exexute function
filterImage();