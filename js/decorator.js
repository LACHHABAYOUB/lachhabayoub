function decorate() {
    setInterval(() => {
        let textArea = document.getElementById("text");
        var fontSize = window.getComputedStyle(textArea, null).getPropertyValue('font-size');
        textArea.style.fontSize = (parseInt(fontSize) + 2) + 'pt';
    }, 500)
}

function onChangeTextBox() {
    let isBling = document.getElementById('bling').checked;
    let textArea = document.getElementById("text");
    if (isBling) {
        textArea.style.fontWeight = 'bold';
        textArea.style.color = 'green';
        textArea.style.textDecoration = 'underline';
        document.body.background = "http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg";
    } else {
        textArea.style.fontWeight = 'normal';
        textArea.style.textDecoration = 'none';
        textArea.style.color = 'black';
        document.body.background = 'white';
    }
}

function onBtnIgpayClick() {
    let textArea = document.getElementById("text");
    let results = textArea.value
                        .split(" ")
                        .map(word => transformWord(word))
                        .join(" ");
    
    textArea.value = results;
}

function transformWord(word) {
    let vowels = "aeoui";
    let result = word, firstLetter = word.charAt(0);
    if (vowels.indexOf(firstLetter) == -1) {
        result = result.substring(1, word.length) + firstLetter;
    }
    return result + '-ay';
}

function onBtnMalkovitchClick() {
    let textArea = document.getElementById("text");
    let results = textArea.value
                        .split(" ")
                        .map(word => transformMalkovitch(word))
                        .join(" ");
    
    textArea.value = results;
}

function transformMalkovitch(word) {
    return word.length >= 5 ? "Malkovitch" : word;
}

window.onload = function () {
    "use strict";
    // put all of your code here

    let button = this.document.getElementById("btnBiggerDecoration");
    button.onclick = this.decorate;

    let checkbox = document.getElementById('bling');
    checkbox.onchange = this.onChangeTextBox;

    let btnIgpay = document.getElementById('btnIgpay');
    btnIgpay.onclick = this.onBtnIgpayClick;
    
    let btnMalkovitch = document.getElementById('btnMalkovitch');
    btnMalkovitch.onclick = this.onBtnMalkovitchClick;
}