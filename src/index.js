
let cards = document.querySelectorAll(".row__card");
let actives = document.querySelectorAll(".active");
let absents = document.querySelectorAll(".absent");
let subtitles = document.querySelectorAll(".subtitle");
let button = document.querySelectorAll(".button");

// Счетчик
let counterMinusElems = document.querySelectorAll('.minus');
let counterPlusElems = document.querySelectorAll('.plus');
let counts = new Array(cards.length).fill(0);

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
        if (counterPlusElems[i].classList.contains("click_button") || counterMinusElems[i].classList.contains("click_button")) {
            if (counts[i] == 0) {
                clickinTheFeedOver(i);
            }
            if (counts[i] > 0) {
                clickingOnTheFatCat(i);
            }
        }
    })
    
    button[i].addEventListener('click', function () {
        if (counterPlusElems[i].classList.contains("click_button") || counterMinusElems[i].classList.contains("click_button")) {
            if (counts[i] == 0) {
                clickinTheFeedOver(i);
            }
            if (counts[i] > 0) {
                clickingOnTheFatCat(i);
            }
        }
    })
    
}

// Счетчик



for (let i = 0; i < counts.length; i++) {

    counterPlusElems[i].addEventListener("click", function () {
        counterPlusElems[i].classList.toggle('click_button');
        counts[i] = 1;

        if (counterMinusElems[i].classList.contains("click_button")) {
            counterMinusElems[i].classList.remove('click_button');
            if ( cards[i].classList.contains('bk-absent')) {
                clickinTheFeedOver(i)
            }
        }

        if (!counterPlusElems[i].classList.contains('click_button')) {
            if (cards[i].classList.contains('bk-active')) {
                clickingOnTheFatCat(i)
            }
        }
    });
    
    counterMinusElems[i].addEventListener("click", function () {
        counterMinusElems[i].classList.toggle('click_button');
        counts[i] = 0;

        if (counterPlusElems[i].classList.contains("click_button")) {
            counterPlusElems[i].classList.remove('click_button');
            if ( cards[i].classList.contains('bk-active')) {
                clickingOnTheFatCat(i)
            }
        }

        if (!counterMinusElems[i].classList.contains('click_button')) {
            if(cards[i].classList.contains('bk-absent')) {
                clickinTheFeedOver(i)
            }
        }
    });
    
}











