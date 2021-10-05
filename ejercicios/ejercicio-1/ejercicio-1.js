const newArticleItem = document.querySelector('.new-article');
const addNumberItems = document.querySelector('#addArticles');
const articles = document.querySelector('.articles');
const modal = document.querySelector('.modal');
const inputColor = document.querySelector('.input-color');
const selectStyle = document.querySelector('.select-style');
const InputSizeBorder = document.querySelector('.input-size-border');
let currentItemSelected;

addNumberItems.addEventListener('blur', (event) => {
    const number = Number(event.target.value);
    const articles = document.querySelectorAll('.item-article');
    articles.forEach((item) => item.remove());
    for (let i = 0; i < number; i ++) {
        addElement();
    }

});

newArticleItem.addEventListener('click', (event) => {
    addElement();
});

articles.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-article')) {
        currentItemSelected = event.target;
        modal.classList.add('show-modal');
    }
});

modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('show-modal')) {
        event.target.classList.remove('show-modal');
    }
    if (event.target.classList.contains('save-styles')) {
        currentItemSelected.style.border = InputSizeBorder.value + 'px' + ' ' + selectStyle.value + ' ' + inputColor.value;
        modal.classList.remove('show-modal');
    }
});

function addElement() {
    const newElement = document.createElement('article');
    newElement.classList.add('item-article');
    articles.appendChild(newElement);
}
