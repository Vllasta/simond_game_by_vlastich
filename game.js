var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = (0)

$(document).one("keypress", newSequence);



function newSequence (){
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    var randomColor = buttonColors[randomNumber];
    gamePattern.push(randomColor);
    console.log(gamePattern);
    //$("#"+randomColor).fadeOut(150).fadeIn(150);
    setTimeout(function() {
        $("#" + randomColor).fadeOut(150).fadeIn(150);
    }, 700);
    var audio = new Audio("./sounds/"+randomColor+".mp3");
    setTimeout(function() { audio.play();},700);
    level++
    $("h1").text("Level "+level);
    
    
}

$(".btn").click(function(event){
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    var audioClick = new Audio("./sounds/"+userChosenColor+".mp3");
        audioClick.play();
    $("#"+userChosenColor).addClass("pressed");
    setTimeout(function(){
        $("#"+userChosenColor).removeClass("pressed");}, 100);
        
//ZKONTROLUJ, JESTLI KLIKL UŽIVATL SPRÁVNĚ:

        if (userClickedPattern[userClickedPattern.length-1]==gamePattern[userClickedPattern.length-1]){
            if(userClickedPattern.length==gamePattern.length){
                console.log("youre answer was correct")
                newSequence();
            }else{
                console.log("klikni další pattern")
            }
        }else{
            //setTimeout (function (){ $("body").addClass("game-over")},1500);
            $("body").addClass("game-over");
            var endSound = new Audio ("./sounds/wrong.mp3");
            endSound.play();
            $("h1").text("WRONG!");
            //setTimeout (function (){endSound.play()},500);
            setTimeout (function (){location.reload()},1500);
        }


    })

   
