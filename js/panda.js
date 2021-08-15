const h2 = document.getElementsByTagName('h2');
for (const h of h2) {
    h.style.color = 'lightblue';
}



const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'tomato';
backpack.style.padding = '10px';



const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}



function clicking() {
    console.log('click');
}



document.getElementsByClassName('buy-now')
const buyButtons = document.getElementsByClassName('buy-now');
for (const buyButton of buyButtons) {
    buyButton.addEventListener('click', function () {
        buyButton.style.display = 'none';
    })
}



const submit = document.getElementById('submit');
submit.setAttribute('disabled', true);
const inputvalue = document.getElementById('input-area')
inputvalue.addEventListener('keyup', function (event) {
    if (event.target.value == 'email') {
        submit.removeAttribute('disabled');
    }
    else {
        submit.setAttribute('disabled', true);
    }
})



const changeImage = document.getElementById('change-image');
changeImage.addEventListener('mouseenter', function () {
    changeImage.src = 'images/shoes/shoe-2.png';
})
changeImage.addEventListener('mouseleave', function () {
    changeImage.src = 'images/shoes/shoe-1.png';
})



const touchArea = document.getElementById('touch-area');
const touchText = document.getElementById('touch-text');
touchArea.addEventListener('dblclick', function () {
    touchText.style.backgroundColor = 'purple';
})

