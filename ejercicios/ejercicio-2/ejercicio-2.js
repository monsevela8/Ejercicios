const answerFour = document.querySelectorAll('input[name="radios"]');
const answerFive = document.querySelectorAll('.checkbox');
const answerOne  = document.querySelectorAll('input[name="radios"]');
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let valueOne;
    let valueTow;
    let valueThree;
    let valueFour;
    let valueFive = [];

    answerFive.forEach(item => {
        if (item.checked) {
            valueFive.push(item.value);
        }
    });
    answerFour.forEach(item => {
        if (item.checked) {
            valueFour = item.value;
        }
    });

    answerOne.forEach(item => {
        if (item.checked) {
            valueOne = item.value;
        }
    });



});
