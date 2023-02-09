const firstQuantity = document.querySelector('.first-quantity');
const firstDiameter = document.querySelector('.first-diameter');
const firstPrice = document.querySelector('.first-price');

const secondQuantity = document.querySelector('.second-quantity');
const secondDiameter = document.querySelector('.second-diameter');
const secondPrice = document.querySelector('.second-price');

const btn = document.querySelector('.check');

const firstPizza = document.querySelector('.first-pizza');
const secondPizza = document.querySelector('.second-pizza');

{
    /* <div class="first-pizza">
<div class="title"></div> */
}

const calculate = () => {
    const firstVariant =
        ((firstPrice.value * firstQuantity.value) /
            ((firstDiameter.value / 2) * (firstDiameter.value / 2) * 3.14 * firstQuantity.value)) *
        100;
    const secondVariant =
        ((secondPrice.value * secondQuantity.value) /
            ((secondDiameter.value / 2) * (secondDiameter.value / 2) * 3.14 * secondQuantity.value)) *
        100;
    console.log(firstVariant);
    console.log(secondVariant);

    firstPizza.classList.remove('win', 'lose');
    secondPizza.classList.remove('win', 'lose');

    if (firstVariant < secondVariant) {
        firstPizza.classList.add('win');
        secondPizza.classList.add('lose');
    } else if (firstVariant > secondVariant) {
        firstPizza.classList.add('lose');
        secondPizza.classList.add('win');
    }
};

btn.addEventListener('click', calculate);
