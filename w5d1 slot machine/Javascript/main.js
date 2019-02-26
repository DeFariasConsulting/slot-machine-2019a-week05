//to-do: Instead of min/max, use hard numbers like 5, 10, 15, etc. Get images for each reel option/name. Create border for each reel. Make blank or preloaded reels available and visible automatically, not just after clicking button. Style buttons so they're always in same spot and look better. Have effects when winning or losing, like spinning elements and some sort of confetti thing and a sound. Add background image. Add jackpot option using RC logo. Represent the bets and winnings using chips, alter accordingly as bank changes. Gray out bets bank can't afford. Have credit option.


//Compare reel values with each other.
//If reels equal each other, user wins. If not, user loses. If user wins, a positive number value (say $25) is awarded.
//Win result generated and user's starting bank is changed according to their bet. Min bet would multiply the payout by an amount and max bet would multiply it by a larger amount.

// Creating variables here since they'll be used both in checkReels and runReels
var reelOne = 0,
reelTwo = 0,
reelThree = 0,
bank = 0,
payout = 0;

//Click event listener, either min or max bet.
document.getElementById('minBet').onclick= betMinimum;
document.getElementById('maxBet').onclick= betMaximum;

// will use variables reelOne, reelTwo, reelThree and reelOptions
function runReels(){
//create array with the potential reel options
var reelOptions = ["Leon", "Del", "Muigai", "Rougui", "Stephanie"];
//Use math.random to randomize, multiply it by the number of variables in the array and use math.floor so the numbers spit out are between 0 and 4. Don't need to worry about it never being five, since .length will be using 1-5 while the index uses 0-4.
reelOne= reelOptions[Math.floor(Math.random() * reelOptions.length)];
reelTwo= reelOptions[Math.floor(Math.random() * reelOptions.length)];
reelThree = reelOptions[Math.floor(Math.random() * reelOptions.length)];
document.getElementById("reel1").innerHTML= reelOne;
document.getElementById("reel2").innerHTML= reelTwo;
document.getElementById("reel3").innerHTML= reelThree;
}
//Function for checking the result of runReels and deciding if user won or lost. If the user wins, return the payout and change the resultMessage.
function checkReels(){
if(reelOne===reelTwo&&reelOne===reelThree){
  document.getElementById("resultMessage").innerHTML= "Congratulations, you win! But don't get used to it.";
  payout = 25;
}else{
  document.getElementById("resultMessage").innerHTML= "Congratulations, you're a disgrace to humanity. You lose. Get used to it, loser.";
  payout= -25;
}
}
//Chris pointed out to me that while my code makes sense, it only makes sense now. If i want to make this a legit slot machine, I need to give the minimum and maximum bet actual numbers that are then manipulated. Right now, I have min bet and max bet being the same initial value and being multiplied by a different value at the end.
function betMinimum(){
  runReels();
  checkReels();
  bank = bank + (payout*2)
  document.getElementById("bank").innerHTML= bank;
}
function betMaximum(){
  runReels();
  checkReels();
  bank = bank + (payout*10)
  document.getElementById("bank").innerHTML= bank;
}
