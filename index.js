const mainButton = document.querySelector('.button');
const wrapper = document.querySelector('.cards__wrapper');
const shirtWrapper = document.querySelector('.cards__shirt_wrapper');
const shirt = document.querySelector('.cards__shirt');
const card = document.querySelector('.cards__card');
const greenBlockText = document.querySelector('.cards__stages_first>.cards__stages_text');
const brownBlockText = document.querySelector('.cards__stages_second>.cards__stages_text');
const blueBlockText = document.querySelector('.cards__stages_third>.cards__stages_text');

const green_1 = document.querySelector('#green_1');
const green_2 = document.querySelector('#green_2');
const green_3 = document.querySelector('#green_3');
const brown_1 = document.querySelector('#brown_1');
const brown_2 = document.querySelector('#brown_2');
const brown_3 = document.querySelector('#brown_3');
const blue_1 = document.querySelector('#blue_1');
const blue_2 = document.querySelector('#blue_2');
const blue_3 = document.querySelector('#blue_3');

mainButton.addEventListener('click', () => {
    wrapper.style.display = 'block';
    mainButton.textContent = 'Трепещи!'
})

let pulOfCards = cardMixer ();
let pulOfStage1 = stage (1, 2, 1);
let pulOfStage2 = stage (3, 2, 1);
let pulOfStage3 = stage (2, 4, 0);
let countOfCards = 16;
let color = '';

shirt.addEventListener('click', () => {
    card.style.opacity = 1;

    countOfCards--;
    if (countOfCards <= 0) {
        shirt.style.display = 'none';
        blueBlockText.classList.add('black_text')
    } else if (countOfCards <= 6) {
        brownBlockText.classList.add('black_text')
    } else if (countOfCards <= 12) {
        greenBlockText.classList.add('black_text')
    }

    if (showMyCard (pulOfStage1) === 'end') {
        if (showMyCard (pulOfStage2) === 'end') {
            if (showMyCard (pulOfStage3) === 'end') {

            }
        }
    }
    counter ();
});


function counter () {
    if (color === 'green') {
        if (green_1.textContent <= 0) {
            if (green_2.textContent <= 0) {
                green_3.textContent--;
            } else {
                green_2.textContent--;
            }
        } else {
            green_1.textContent--;
        }
    } else if (color === 'brown') {
        if (brown_1.textContent <= 0) {
            if (brown_2.textContent <= 0) {
                brown_3.textContent--;
            } else {
                brown_2.textContent--;
            }
        } else {
            brown_1.textContent--;
        }
    } else if (color === 'blue') {
        if (blue_1.textContent <= 0) {
            if (blue_2.textContent <= 0) {
                blue_3.textContent--;
            } else {
                blue_2.textContent--;
            }
        } else {
            blue_1.textContent--;
        }
    }
}


function showMyCard (pul) {
    let rand;
    function randomize () {
        rand = Math.floor(Math.random() * 3);
        if (rand === 0) {
            color = 'green';
        } else if (rand === 1) {
            color = 'brown';
        } else {
            color = 'blue';
        }
    }
    randomize();

    function show() {
        if (pul[0].length === 0 && pul[1].length === 0 && pul[2].length === 0) {
            return 'end';
        } else if (pul[rand].length === 0) {
            randomize();
            show();
        } else {
            return card.style.backgroundImage = `url('assets/MythicCards/${color}/${color}${pul[rand].pop()}.png')`
        }
    }

    return show();
}

function stage (green, brown, blue) {
    let cards = [[], [], []];

    for (let i = 0; i < green; i++) {
        cards[0].push(pulOfCards[0].pop())
    }

    for (let i = 0; i < brown; i++) {
        cards[1].push(pulOfCards[1].pop())
    }

    for (let i = 0; i < blue; i++) {
        cards[2].push(pulOfCards[2].pop())
    }

    return cards
};

function cardMixer () {
    let greenArray = [];
    let brownArray = [];
    let blueArray = [];

    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 18) + 1;
        if (greenArray.indexOf(num) === -1) {
            greenArray.push (num);
        } else {
            i--;
        }
    }

    for (let i = 0; i < 8; i++) {
        let num = Math.floor(Math.random() * 21) + 1;
        if (brownArray.indexOf(num) === -1) {
            brownArray.push (num);
        } else {
            i--;
        }
    }

    for (let i = 0; i < 2; i++) {
        let num = Math.floor(Math.random() * 12) + 1;
        if (blueArray.indexOf(num) === -1) {
            blueArray.push (num);
        } else {
            i--;
        }
    }

    return [greenArray, brownArray, blueArray];
}





