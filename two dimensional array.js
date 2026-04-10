
//------------------2D Array----------------
// Create a function called highestRunScorer that will :-
      // Receive a 2D array called playersInfo
      // Based on highest score, return the name of the player

function highestRunScorer(playersInfo){
    
    var highestScorer = playersInfo[0][0];// playersInfo[row][column]
    var highestScorer = playersInfo[0][1];
    
    for(var x = 1; x<playersInfo.length; x++){
        if(highestScorer < playersInfo[x][1]){

            highestScorer = playersInfo[x][1];
            highestScorer = playersInfo[x][0];
        }
    }
    return highestScorer;

}   
var playersInfo = [
    ["Ashraful", 95],
    ["Mizan", 25],
    ["Rakib", 745],
    ["Luba", 105],
];  
var name = highestRunScorer(playersInfo);
document.write(name);


