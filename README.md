# My Awesome Project
This project's goal was to create a slot-machine with 3 reels, each with 5 options. The user is able to make a minimum and maximum bet, both of which have different payouts. Upon winning or losing, a message is presented.

![image](slot-machine.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This was a surprisingly simple code that used randommization to generate the reels and then had a function for checking the reels and for changing the HTML based on the results of the reels.

## Optimizations
This slot machine would be better if I had users input their starting bank and then bet different, pre-set amounts that had different pay-offs (and different success rates). I could also Get images for each reel option/name and have them styled to display in a way where each reel displays 3 options, the one that was chosen and the one that was "just before" or "just after" the chosen one. I could also have effects when winning or losing, like spinning elements and some sort of confetti thing and a sound. I could add a jackpot reel option that pays out much more than the others but is also much less frequent. Lastly, I could have different win conditions like if 2 of the reel options match or even maybe including the previously mentioned just before and just after reel options.

## Lessons Learned:

I learned that I can't have a conditional say (variable 1 == variable 2 == variable 3) but instead have to use the && operator and make variable 1 equal to both 2 and 3. I also learned another way of using math.random to add randomness to something that's not numbers.
