let changeImage = () => {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    let image = document.getElementById('img');
    // image.src = '/Introduction To JS/media/' +  randomNumber + '.jpg';  --direct way
    image.setAttribute('src', '/Introduction To JS/media/' +  randomNumber + '.jpg')
}