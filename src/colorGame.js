var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");

colorDisplay.textContent=pickedColor;

for (var i=0;i<squares.length;i++ ) {
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click",function () {
        var clickColor=this.style.backgroundColor;
        if (clickColor===pickedColor) {
            messageDisplay.textContent="Corect !";
            chaneColors(clickColor);
            h1.style.background=clickColor;
        }else {
            this.style.background="#232323";
            messageDisplay.textContent="Try Again";
        }
    });
}

function chaneColors(color) {
    for (var i=0;i<squares.length;i++){
        squares[i].style.background=color;

    }

}

function pickColor() {
    var random= Math.floor(Math.random()*colors.length);
    return colors[random];

}

function generateRandomColors(num) {
    var arr=[];
    for (var i=0;i<num;i++){
        arr.push(randomColor())



    }
    return arr;
}

function randomColor() {

    var r= Math.floor(Math.random()*256);
    var g= Math.floor(Math.random()*256);
    var b= Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";

}