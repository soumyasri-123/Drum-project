var numberofDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0; i<numberofDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHtml=this.innerHtml;
        makeSound(buttonInnerHtml);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
        var tom1=new Audio("./assets/audio/m1.mp3");
        tom1.play();
        break;

        case "a":
        var tom2=new Audio("./assets/audio/m2.mp3");
        tom2.play();
        break;

        case "s":
        var tom3=new Audio("./assets/audio/m3.mp3");
        tom3.play();
        break;

       case "d":
        var sri1=new Audio("./assets/audio/m4.mp3");
        sri1.play();
        break;

        case"j":
        var sri2=new Audio("./assets/audio/m5.mp3");
        sri2.play();
        break;

        case"k":
        var soun=new Audio("./assets/audio/m6.mp3");
        soun.play();
        break;

        case"l":
        var sound1=new Audio("./assets/audio/m7.mp3");
        sound1.play();
        break;



        default:console.log(key);
    }
}
function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){

        activeButton.classList.remove("pressed");
    },100);
} 

    
