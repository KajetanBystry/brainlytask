let data = [],
    feedbackdata = [],
    test = [],
    index = 0;

window.onload = function () {
    feedbackData();
    mainData();
}

function mainData() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://gist.githubusercontent.com/vergilius/6d869a7448e405cb52d782120b77b82c/raw/e75dc7c19b918a9f0f5684595899dba2e5ad4f43/history-flashcards.json', true);

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            data = JSON.parse(request.responseText);
            createQuestionTags(data);
            newQuestion();
            document.querySelector('.question__item--last').style.visibility = 'visible';
        } else {
            console.log('no');
        }
    };

    request.onerror = function () {
        console.log('why')
    };
    request.send();
}

function feedbackData() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://kajetanbystry.github.io/brainlytask/data/feedback.json', true);

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            feedbackdata = JSON.parse(request.responseText);
        } else {
            console.log('no')
        }
    };

    request.onerror = function () {
        console.log('why')
    };

    request.send();
}


function createQuestionTags(el) {

    //    createElements
    let questionCont = document.querySelector('.question__items'),
        slides = document.getElementsByClassName('question__item'),
        h = document.createElement('h'),
        div = document.createElement('div'),
        p = document.createElement('p'),
        innerDiv = document.createElement('div');

    //add classes
    h.setAttribute("class", 'question__header sg-text-bit sg-text-bit--large sg-text-bit--alt');
    div.setAttribute("class", 'question__item');
    p.setAttribute("class", 'question__text sg-header-primary sg-header-primary--small');
    innerDiv.setAttribute("class", 'question__options');

    //append
    questionCont.insertBefore(div, document.querySelector('.question__item--last'));
    div.append(h, p, innerDiv);

    //insert data    
    p.innerHTML = el[0].question;
    h.innerHTML = `Question #${index + 1}`;
    div.style.left = `${100 * (index + 1)}%`;

    //last tab position
    document.querySelector('.question__item--last').style.left = `${100 * (index + 2)}%`;
    //buttons scripts
    el[0].answers.forEach(function (key) {
        let button = document.createElement('button'),
            feedback = document.querySelector('.message__feedback');
        innerDiv.appendChild(button);
        button.setAttribute("class", 'question__btn sg-button-primary sg-button-primary--dark');
        button.innerHTML = key.answer;
        button.addEventListener("click", function checkResult() {
            document.querySelector('.message').classList.remove('js-fadeout');
            document.querySelector('.message').classList.add('js-fadein');
            //            if answer correct
            if (key.correct === true) {
                this.className += 'question__btn--right';
                feedback.textContent = 'You got it!';
                feedback.style.color = '#53cf92';
                addFeedbackDataGood(randomNumber());
                //            if answer incorrect
            } else {
                this.className += ' question__btn--wrong'
                feedback.textContent = 'Sorry, but that is wrong.';
                feedback.style.color = '#ff796b';
                addFeedbackDataBad(randomNumber());
                el.push(data[0]);
            }
            el.splice(0, 1);
            index++;
            if (el.length === 0) {
                document.querySelector('question__result').textContent = `${time/60}m ${time % 60}s`
                return 0
            } else {
                createQuestionTags(el)
            };
            document.querySelector('.js-question__item--remove').remove();
        });
    });
};

function newQuestion() {
    let slides = document.getElementsByClassName('question__item'),
        first = document.querySelector('.js-question--btn__first'),
        next = document.querySelector('.message__btn'),
        questionCount = 100;

    first.addEventListener('click', function (e) {
        e.preventDefault();
        slider();
    });


    next.addEventListener('click', function (e) {
        e.preventDefault();
        questionCount += 100;
        document.querySelector('.message').classList.remove('js-fadein');
        document.querySelector('.message').classList.add('js-fadeout');
        slider();
    });

    function slider() {
        setTimeout(function () {
            for (var i = 0; i < slides.length; i += 1) {
                slides[i].style.transform = 'translateX(-' + questionCount + '%)';
                slides[0].classList.add('js-question__item--remove');
            }
        }, 500);
    }
}


function addFeedbackDataGood(number) {
    document.querySelector('.message__link').textContent = `Who is ${feedbackdata[number].name}? Read here!`;
    document.querySelector('.message__link').setAttribute('href', `${feedbackdata[number].link}`);
    document.querySelector('.message__about').textContent = `${feedbackdata[number].right.text}`;
    document.querySelector('.message__image').setAttribute('src', `${feedbackdata[number].right.img}`);
}

function addFeedbackDataBad(number) {
    document.querySelector('.message__link').textContent = `Who is ${feedbackdata[number].name}? Read here!`;
    document.querySelector('.message__link').setAttribute('href', `${feedbackdata[number].link}`);
    document.querySelector('.message__about').textContent = `${feedbackdata[number].wrong.text}`;
    document.querySelector('.message__image').setAttribute('src', `${feedbackdata[number].wrong.img}`);
}

function randomNumber() {
    let random = Math.floor((Math.random() * 11));
    return random;
}

if (screen.width <= 700) {
    document.querySelector('.message__text').className = 'message__text sg-bubble sg-bubble--top';
}