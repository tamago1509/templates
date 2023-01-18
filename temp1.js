const inputTitle = document.querySelector('#title');
const forTitle = document.querySelector('.input-title');
const divTitle = document.querySelector('.title')
const addPic1 = document.querySelector('.addPic1');
const addPic2 = document.querySelector('.addPic2');
const inputPic1 = document.querySelector('.inputPic1');
const inputPic2 = document.querySelector('.inputPic2');
const pic1 = document.querySelector('.pic1');
const pic2 = document.querySelector('.pic2');
const pic = document.querySelector('pic');
const graph1TextArea = document.querySelector('#graph1');
const graph2TextArea = document.querySelector('#graph2');
const displayGraph1 = document.querySelector('.graph1');
const displayGraph2 = document.querySelector('.graph2');
const saveBtn = document.querySelector('.saveBtn');
const inputGif = document.querySelector('#gif-name');
const searchGifBtn = document.querySelector('#search-gif-btn');
const date = document.querySelector('.date');
const searchGif = document.querySelector('.search-giphy');
const selectGif = document.querySelector('.select_gif')
const showGif = document.querySelector('.gif')
const searchResult = document.querySelector('.search-result');



searchResult.addEventListener('click', select_gif)

function select_gif(e) {
    // console.log(e.target.nodeName)
    if (e.target.nodeName === 'IMG') {
        e.target.style.backgroundColor = "rgb(37, 150, 190)";
        const selectedGif = e.target.src;
        // console.log(selectedGif)
        selectGif.addEventListener('click', () => {
            const img = document.createElement('img');
            img.setAttribute('src', selectedGif);
            img.setAttribute('max-width', '100px');
            img.setAttribute('max-height', '100px');
            showGif.append(img);

            document.querySelector('.btn-close').click();
            searchGifBtn.classList.add('d-none')
        })
    }


}
searchGif.addEventListener("click", function (e) {
    let userInput = inputGif.value;
    searchGiphy(userInput);
})

function searchGiphy(searchQuery) {
    var url =
        "https://api.giphy.com/v1/gifs/search?api_key=TTkCF59EPD3EfHcwFBm10PnHLjTan4fg&q="
        + searchQuery;

    // AJAX Request

    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open("GET", url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener("load", async function (data) {
        var actualData = await data.target.response;
        pushToDOM(actualData);


    });
}
function pushToDOM(response) {

    // Turn response into real JavaScript object
    response = JSON.parse(response);

    // Drill down to the data array
    var images = response.data;

    // Find the container to hold the response in DOM
    var container = document.querySelector(".search-result");

    // Clear the old content since this function
    // will be used on every search that we want
    // to reset the div
    container.innerHTML = "";

    // Loop through data array and add IMG html
    images.forEach(function (image) {

        // Find image src
        var src = image.images.fixed_height.url;

        // Concatenate a new IMG tag
        container.innerHTML += "<img src='"
            + src + "' class='container-image p-2' />";
    });
}


function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}



saveBtn.addEventListener('click', function () {
    divTitle.innerText = inputTitle.value;
    forTitle.style.display = 'none';
    date.innerText = new Date();
})

addPic1.addEventListener('click', function () {
    inputPic1.click();


})
addPic2.addEventListener('click', function () {
    inputPic2.click();


})
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
inputPic1.addEventListener('change', async function (e) {
    const file = e.target.files[0];
    const src = await getBase64(file);
    // console.log(src);
    const img = document.createElement('IMG');
    img.setAttribute('src', src)
    img.setAttribute('width', "300px");
    img.classList.add('img-thumbnail');
    pic1.appendChild(img);
    // pic.style.display = 'none';
    addPic1.style.display = 'none';
    pic1.style.backgroundColor = 'white'
})
inputPic2.addEventListener('change', async function (e) {
    const file = e.target.files[0];
    const src = await getBase64(file);
    // console.log(src);
    const img = document.createElement('IMG');
    img.setAttribute('src', src)
    img.setAttribute('width', "500px");
    img.classList.add('img-thumbnail');
    pic2.appendChild(img);
    // pic.style.display = 'none';
    addPic2.style.display = 'none';
    pic2.style.backgroundColor = 'white'
})

saveBtn.addEventListener('click', () => {
    const msg1 = graph1TextArea.value;
    const pElement = document.createElement('p');
    pElement.innerText = msg1.charAt(0).toUpperCase() + msg1.slice(1);
    displayGraph1.innerText = pElement.innerText;


})
saveBtn.addEventListener('click', () => {
    const msg1 = graph2TextArea.value;
    const pElement = document.createElement('p');
    pElement.innerText = msg1.charAt(0).toUpperCase() + msg1.slice(1);
    displayGraph2.innerText = pElement.innerText;
    document.querySelector('.editBtn').classList.toggle('d-none');
    saveBtn.classList.toggle('d-none');

})