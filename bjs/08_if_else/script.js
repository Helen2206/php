let minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;
(maxValue === 1000) ? maxValue = 999: false;
(minValue === -1000) ? minValue = -999: false;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);

let orderNumber = 1;
let gameRun = true;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;


answerField.innerText = `Вы загадали число ${answerNumber }?`;




document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;



})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random() * 3);
            const answerPhrase = (phraseRandom === 0) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                (phraseRandom === 1) ?
                `Я сдаюсь..\n\u{1F92F}` :
                (phraseRandom === 2) ?
                `У меня никак не получается угадать\n\u{1F92F}` :
                `Беда какая-то...\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 3);
            const answerPhrase = (phraseRandom === 0) ?
                `Загадали ${answerNumber }?` :
                (phraseRandom === 1) ?
                `Могу предположить ${answerNumber }?` :
                (phraseRandom === 2) ?
                `C легкостью могу заверить это ${answerNumber }?` :
                `Допустим ${answerNumber }?`;
            answerField.innerText = answerPhrase;
        }
    }
})


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const phraseRandom = Math.round(Math.random() * 3);
        const answerPhrase = (phraseRandom === 0) ?
            `Я всегда угадываю\n\u{1F60E}` :
            (phraseRandom === 1) ?
            `Фортуна на моей стороне` :
            (phraseRandom === 2) ?
            `Я Вангую` :
            `Ты так сможешь? сомневаюсь`;


        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === (maxValue - 1)) { // в minValue (5) === в maxValue (10) в этих пределах цикл не продолжается переходит в else
            const phraseRandom = Math.round(Math.random() * 3); // если больше 10ти загаданно Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1)
            const answerPhrase = (phraseRandom === 0) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                (phraseRandom === 1) ?
                `Я сдаюсь..\n\u{1F92F}`:
                (phraseRandom === 2) ?
                `У меня никак не получается угадать..\n\u{1F914}`:
                `Беда какая-то...\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
            const answerPhrase = (phraseRandom === 0) ?
                `Загадали ${answerNumber }?` :
                (phraseRandom === 1) ?
                `Могу предположить ${answerNumber }?` :
                `C легкостью могу заверить это ${answerNumber }?` ;
               
                
               
            answerField.innerText = answerPhrase;
        }
    }

})