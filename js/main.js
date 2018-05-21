let data = [],
    feedbackdata = [],
    test = [],
    time =  0,
    counter = 20,
    index = 0;

window.onload = function () {
    feedbackData();
    mainData();
    setTimeout(function(){
        document.querySelector('.question__welcome').classList += ' js-fadeout';
    }, 2000);
    setTimeout(function(){
    document.querySelector('.question__items').classList += ' js-fadein';
    }, 4000);  
    
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
                document.querySelector('.question__result').textContent = `${time} s`
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
        document.querySelector('.question__timer').style.visibility = 'visible';
        setTimeout(timer(),500);
    });


    next.addEventListener('click', function (e) {
        e.preventDefault();
        questionCount += 100;
        document.querySelector('.message').classList.remove('js-fadein');
        document.querySelector('.message').classList.add('js-fadeout');
        slider();
        setTimeout(timer(),2500);
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

function timer(){
    let stoper = document.querySelector('.question__timer'),
        feedbacker = document.querySelector('.message__feedback'),
        result = document.querySelector('.question__result').textContent,
        feedback = document.querySelector('.message__feedback'),
        counting = setInterval(function(){
        counter--
        stoper.innerHTML = `${counter}s`;
    
        if (data.length === 0) {
                clearInterval(counting);
                stoper.style.visibility = 'hidden';
                result.textContent = `${time} s`
        }    
            
        if(counter === 0){
        feedbacker.textContent = 'Sorry, but you run out of time.';
        feedbacker.style.color = '#ff796b';
        document.querySelector('.message').classList.remove('js-fadeout');
        document.querySelector('.message').classList.add('js-fadein');
        addFeedbackDataBad(randomNumber());
        time += 20 - counter;
        counter = 20;
        index++;
        clearInterval(counting);
        if (data.length === 0) {
                clearInterval(counting);
                stoper.style.visibility = 'hidden';
                result.textContent = `${time} s`
                return 0
            } else {
            createQuestionTags(data)
            };
       }
    }, 1000);
        
    
    document.querySelectorAll('.question__btn').forEach(function(btn){
        btn.addEventListener('click', function(){
            clearInterval(counting);
            time += 20 - counter;
            counter = 20;
        })
    })    
}