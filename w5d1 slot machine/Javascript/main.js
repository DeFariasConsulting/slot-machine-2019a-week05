// Ids
// minBet
// maxBet
// Bank
// resultMessage
//
// functions
// betMinimum - onclick of minBet
// betMaximum - onclick of maxBet
// runReels - generate values for the three reels
// checkReels - compare each
//
// variables
// reelOne, reelTwo, reelThree for each reel machine current values
// reelOptions for array that each reel will have, with 5 options. ["Leon", "Del", "Muigai", "Rougui", "Stephanie"]

//Compare reel values with each other.
//If reels equal each other, user wins. If not, user loses. If user wins, a positive number value (say $25) is awarded.
//Win result generated and user's starting bank is changed according to their bet. Min bet would multiply the payout by an amount and max bet would multiply it by a larger amount.

// Creating variables here since they'll be used both in checkReels and runReels
var reelOne = 0,
reelTwo = 0,
reelThree = 0,
bank = document.getElementById("bank").value;

//Click event listener, either min or max bet.
document.getElementById('minBet').onclick= betMinimum;
document.getElementById('maxBet').onclick= betMaximum;

//The functions betMinimum and betMaximum will only differ at the end when they payout is generated and multiplied before updating the score. The functions will: generate values for each reel, compare the reels to each other, check if user won or lost, multiply payout by min or max bet, update user bank, generate resultMessage

//Function for generating value for each reel. This function will need to run through the 5 items in a reel and choose one at random. Could also run the win condition checker here. I plan on adding more to this so the result of the function is visible (actually showing on the html) so it's better to have this function do only this. Function will have to generate a random value and have that random value be used to decide which of the 5 options within the reel arrays to pull/display.
// will use variables reelOne, reelTwo, reelThree and reelOptions

function runReels(){
//create array with the potential reelOptions
var reelOptions = ["Leon", "Del", "Muigai", "Rougui", "Stephanie"];
//User math.random to randomize, multiply it by the number of variables in the array and use math.floor so the numbers spit out are between 0 and 4. Don't need to worry about it never being five, since .length will be using 1-5 while the index uses 0-4.
reelOne= reelOptions[Math.floor(Math.random() * reelOptions.length)];
reelTwo= reelOptions[Math.floor(Math.random() * reelOptions.length)];
reelThree = reelOptions[Math.floor(Math.random() * reelOptions.length)];

console.log(reelOne);
console.log(reelTwo);
console.log(reelThree);
}

//Function for checking the result of runReels and deciding if user won or lost. Will be a conditional that if reel1===reel2===reel3, the user wins. If the user wins, return the payout and change the resultMessage.

function checkReels(reelOne, reelTwo, reelThree) {
if(reelOne===reelTwo&&reelOne===reelThree){
  document.getElementById("resultMessage").innerHTML= "Congratulations, you win! But don't get used to it.";
  return(25);
}else{
  document.getElementById("resultMessage").innerHTML= "Congratulations, you're a disgrace to humanity. You lose. Get used to it, loser.";
  return(-25);
}
}

//The betMinimum and betMaximum functions will use runReels to generate the reel values, checkReels to decide if the user won or lost and to display the resultMessage, and then it will multiply the output of checkReels (the base payout) by a number and then update the bank. Remember to not just replace the bank, but add or subtract to it.
//Chris pointed out to me that while my code makes sense, it only makes sense now. If i want to make this a legit slot machine, I need to give the minimum and maximum bet actual numbers that are then manipulated. Right now, I have min bet and max bet being the same initial value and being multiplied by a different value at the end.

function betMinimum(){
  runReels();
    if(reelOne===reelTwo===reelThree){
      document.getElementById("resultMessage").innerHTML= "Congratulations, you win! But don't get used to it.";
      bank= bank + (25*2);
      document.getElementbyId("bank").innerHTML= bank;
    }else{
      document.getElementById("resultMessage").innerHTML= "Congratulations, you're a disgrace to humanity. You lose. Get used to it, loser.";
      bank= bank - (25*2);
      document.getElementById("bank").innerHTML= bank;
    }
}

function betMaximum(){
  runReels();
    if(reelOne===reelTwo===reelThree){
      document.getElementById("resultMessage").innerHTML= "Congratulations, you win! But don't get used to it.";
      bank= bank + (25*10);
      document.getElementById("bank").innerHTML= bank;
    }else{
      document.getElementById("resultMessage").innerHTML= "Congratulations, you're a disgrace to humanity. You lose. Get used to it, loser.";
      bank= bank - (25*10);
      document.getElementById("bank").innerHTML= bank;
    }
}
