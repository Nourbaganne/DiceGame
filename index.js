img1 = document.querySelector('.img1');
img2 = document.querySelector('.img2');
header = document.querySelector('h1');
btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    randomNb1 = Math.floor(Math.random() * 6) + 1;
    img1.setAttribute('src', 'images/dice' + randomNb1 + '.png');

    randomNb2 = Math.floor(Math.random() * 6) + 1;
    img2.setAttribute('src', 'images/dice' + randomNb2 + '.png');

    if (randomNb1 > randomNb2) {
        header.textContent = '🚩Player 1 Wins';
    }
    else if (randomNb1 === randomNb2){
        header.textContent = 'Draw';
    }
    else {
        header.textContent = 'Player 2 Wins 🚩';
    }
})

