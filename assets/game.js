//variables
var gameNumber = "";
var wins = 0;
var loss = 0;
var playerScore = 0;
var images = ["assets/images/blueGem.jpg", "assets/images/pinkGem.jpg", "assets/images/greyGem.jpg", "assets/images/purpleGem.jpg"]

//functions
function randomNumber (){
    gameNumber = Math.floor(Math.random() * (120-19+1) + 19);
};

function randomGems (){
    $(".gems").empty();
    for(var i = 0; i < images.length; i++){
        var random = Math.floor(Math.random() * 12) + 1;
        
        var gem = $("<img>");
          gem.attr("src", images[i]);
          gem.attr("value", random);
          gem.attr("class", "gem");
    
        $(".gems").append(gem);
         
    }
}

function reset (){
    playerScore = 0;
    gameNumber = "";
    randomNumber();
    $("#randomNum").html("Match this number: " + gameNumber);
    $("#score").html("Your score is: " + playerScore);
    randomGems();
}

//When page is loaded
randomNumber ();
randomGems ();
$("#randomNum").html("Match this number: " + gameNumber);
$("#score").html("Your score is: " + playerScore);
$("#win").html("Games Won: ");
$("#loss").html("Games Lost: ");

//Game
$(document).on("click", ".gem", function(){
    playerScore += parseInt($(this).attr("value"));
    console.log(playerScore);
    $("#score").html("Your score is: " + playerScore);
    if(playerScore > gameNumber){
        loss++;
        $("#loss").html("Games Lost: " + loss);
        alert("You lose")
        reset();
        
        
    }
    else if(playerScore === gameNumber){
        wins++;
        $("#win").html("Games Won: " + wins);
        alert("You win!");
        reset();
        
        
    }
})



