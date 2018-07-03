var colors=[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 255)"
]
var squares=document.querySelectorAll(".square");
var pickedColor=colors[3];
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");

colorDisplay.textContent=pickedColor;

for (var i=0;i<squares.length;i++ ) {
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click",function () {
        var clickColor=this.style.backgroundColor;
        if (clickColor===pickedColor) {
            messageDisplay.textContent="Corect !";
        }else {
           this.style.backgroundColor="#232323";
           messageDisplay.textContent="Try Again";
        }
    });
}