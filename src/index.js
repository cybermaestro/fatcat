
let cards = document.querySelectorAll(".row__card");
let actives = document.querySelectorAll(".active");
let absents = document.querySelectorAll(".absent");
let subtitles = document.querySelectorAll(".subtitle");
let button = document.querySelectorAll(".button");

// Счетчик
let counters = document.querySelectorAll('.row__counter')
let counterMinusElem = document.querySelectorAll('.minus');
let counterPlusElem = document.querySelectorAll('.plus');
let count = new Array(cards.length).fill(0);

// Эффекты карточек

function clickingOnTheFatCat(i) {
    actives[i].classList.toggle('hide');
    actives[i].classList.toggle('show');
    subtitles[i].classList.toggle('hide');
    cards[i].classList.toggle('bk-static');
    cards[i].classList.toggle('bk-active')
}

function clickinTheFeedOver(i) {
    absents[i].classList.toggle('hide');
    absents[i].classList.toggle('show');
    subtitles[i].classList.toggle('hide');
    cards[i].classList.toggle('bk-static');
    cards[i].classList.toggle('bk-absent')
}


for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener('click', function () {
        if (counterPlusElem[i].classList[1] == "click_button" || counterMinusElem[i].classList[1] == "click_button") {
            if (count[i] == 0) {
                clickinTheFeedOver(i);
            }
            if (count[i] > 0) {
                clickingOnTheFatCat(i);
            }
        }
    })
    
    button[i].addEventListener('click', function () {
        if (counterPlusElem[i].classList[1] == "click_button" || counterMinusElem[i].classList[1] == "click_button") {
            if (count[i] == 0) {
                clickinTheFeedOver(i);
            }
            if (count[i] > 0) {
                clickingOnTheFatCat(i);
            }
        }
    })
    
}

// Счетчик





for (let i = 0; i < count.length; i++) {

    counterPlusElem[i].addEventListener("click", function () {
        counterPlusElem[i].classList.toggle('click_button');
        count[i] = 1;

        if (counterMinusElem[i].classList[1] == "click_button") {
            counterMinusElem[i].classList.remove('click_button');
            if ( cards[i].classList[1] == 'bk-absent') {
                clickinTheFeedOver(i)
            }
        }

        if (counterPlusElem[i].classList[1] != 'click_button') {
            if (cards[i].classList[1] == 'bk-active') {
                clickingOnTheFatCat(i)
            }
        }
    });
    
    counterMinusElem[i].addEventListener("click", function () {
        counterMinusElem[i].classList.toggle('click_button');
        count[i] = 0;

        if (counterPlusElem[i].classList[1] == "click_button") {
            counterPlusElem[i].classList.remove('click_button');
            if ( cards[i].classList[1] == 'bk-active') {
                clickingOnTheFatCat(i)
            }
        }

        if (counterMinusElem[i].classList[1] != 'click_button') {
            if(cards[i].classList[1] == 'bk-absent') {
                clickinTheFeedOver(i)
            }
        }
    });
    
}

console.log(counterPlusElem[0].classList[1])









