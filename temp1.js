const inputTitle = document.querySelector('#title');
const btnTittle = document.querySelector('.add-title');
const divTitle = document.querySelector('.title')

btnTittle.addEventListener('click', function () {
    divTitle.innerText = inputTitle.value;
})