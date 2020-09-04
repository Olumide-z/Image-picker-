var imageChanger = document.getElementById('viewed-image');
var viewBtn1 = document.querySelector(".view-btn1");
var viewBtn2 = document.querySelector(".view-btn2");
var viewBtn3 = document.querySelector(".view-btn3");
var viewBtn4 = document.querySelector(".view-btn4");
var viewBtn5 = document.querySelector(".view-btn5");
var viewBtn6 = document.querySelector(".view-btn6");

function myFunc1() {
    imageChanger.src='images/pic1.jpg'
};

function myFunc2() {
    imageChanger.src='images/pic2.png'
};

function myFunc3() {
    imageChanger.src='images/pic3.jpg'
};

function myFunc4() {
    imageChanger.src='images/pic4.png'
};

function myFunc5() {
    imageChanger.src='images/pic5.png'
};

function myFunc6() {
    imageChanger.src='images/pic6.png'
};


viewBtn1.onclick = myFunc1;
viewBtn2.onclick = myFunc2;
viewBtn3.onclick = myFunc3;
viewBtn4.onclick = myFunc4;
viewBtn5.onclick = myFunc5;
viewBtn6.onclick = myFunc6;