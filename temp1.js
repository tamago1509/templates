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

const date = document.querySelector('.date');

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

})