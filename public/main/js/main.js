var heroImage = document.getElementById('heroImage')
var navWrap = document.getElementById('navWrap')
var insertText = document.getElementById('insertText')
var verticalMenu = document.getElementById('verticalMenu')

function toggleNav() {
    var className = navWrap.className
    if (className.includes('toggleNav')) {
        verticalMenu.classList.add('toggleNav')
        setTimeout(function () {
            navWrap.classList.remove('toggleNav')
        }, 600)
    } else {
        navWrap.classList.add('toggleNav')
        setTimeout(function () {
            verticalMenu.classList.remove('toggleNav')
        }, 600)
    }
}

var currentImage = 'house_1.jpg'
changeImage(currentImage, true)

function changeImage(img, init) {

    switch (img) {
        case 'house_1.jpg':
            insertText.innerHTML = `<h1 class="text-white">Home</h1>
    <p class="text-muted">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
    </p>`
            break;
        case 'house_2.jpg':
            insertText.innerHTML = `<h1 class="text-white">Designs</h1>
    <p class="text-muted">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
    </p>`
            break;
        case 'house_3.jpg':
            insertText.innerHTML = `<h1 class="text-white">Locations</h1>
    <p class="text-muted">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
    </p>`
            break;
        case 'house_4.jpg':
            insertText.innerHTML = `<h1 class="text-white">Process</h1>
    <p class="text-muted">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
    </p>`
            break;

        default:
            insertText.innerHTML = `<h1 class="text-white">Contact Us</h1>
    <form onsubmit="event.preventDefault()" class="my-4">
      <input type="text" class="form-control" />
      <button class="btn btn-outline-info mt-3 w-100">Submit</button>
    </form>
    `
            break;
    }

    if (!init)
        if (currentImage === img) return
    var path = "https://htmljstemplates.com/static_files/images/html/" + img
    heroImage.style.background = `url('${path}')`
    heroImage.animate([
        // keyframes
        {
            opacity: 0
        },
        {
            opacity: 1
        }
    ], {
        // timing options
        duration: 1000,
        iterations: 1
    });
    currentImage = img
}