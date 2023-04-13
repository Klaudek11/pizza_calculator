const firstQuantity = document.querySelector('.first-quantity');
const firstDiameter = document.querySelector('.first-diameter');
const firstPrice = document.querySelector('.first-price');

const secondQuantity = document.querySelector('.second-quantity');
const secondDiameter = document.querySelector('.second-diameter');
const secondPrice = document.querySelector('.second-price');

const btn = document.querySelector('.check');

const firstPizza = document.querySelector('.first-pizza');
const secondPizza = document.querySelector('.second-pizza');

const firstResult = document.querySelector('.first-value');
const secondResult = document.querySelector('.second-value');

{
    /* <div class="first-pizza">
<div class="title"></div> */
}

const calculate = () => {
    if (
        firstQuantity.value !== '' &&
        secondQuantity.value !== '' &&
        firstDiameter.value !== '' &&
        secondDiameter.value !== '' &&
        firstPrice.value !== '' &&
        secondPrice.value !== ''
    ) {
        firstPizza.classList.remove('win');
        secondPizza.classList.remove('lose');
        firstResult.style.borderBottom = 'none';
        firstPizza.classList.remove('lose');
        secondPizza.classList.remove('win');
        secondResult.style.borderBottom = 'none';

        const firstVariant = (
            ((firstPrice.value * firstQuantity.value) /
                ((firstDiameter.value / 2) * (firstDiameter.value / 2) * 3.14 * firstQuantity.value)) *
            100
        ).toFixed(2);
        const secondVariant = (
            ((secondPrice.value * secondQuantity.value) /
                ((secondDiameter.value / 2) * (secondDiameter.value / 2) * 3.14 * secondQuantity.value)) *
            100
        ).toFixed(2);
        console.log(firstVariant);
        console.log(secondVariant);

        firstPizza.classList.remove('win', 'lose');
        secondPizza.classList.remove('win', 'lose');

        if (firstVariant < secondVariant) {
            firstPizza.classList.add('win');
            secondPizza.classList.add('lose');
            firstResult.style.borderBottom = '2px solid green';
        } else if (firstVariant > secondVariant) {
            firstPizza.classList.add('lose');
            secondPizza.classList.add('win');
            secondResult.style.borderBottom = '2px solid green';
        }

        firstResult.textContent = `${firstVariant}$ per cm2`;
        secondResult.textContent = `${secondVariant}$ per cm2`;
    } else {
        alert('Enter proper values!');
    }
};

btn.addEventListener('click', calculate);
