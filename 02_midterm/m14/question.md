### Looking at the code below, what is the console log you would get (25%) and why (75%):

(Please view the rendered image below on github.com, not in vscode)

<img src="../images/julia.png" alt="" width="75%" style="display: block; margin: 5vh auto; border: 1px solid #666;">

1. undefined undefined
1. undefined 'Julia Roberts'
1. 'Julia Roberts' 'Julia Roberts'
1. 'Julia Roberts' undefined

var star = {
    knownAS: 'Julia Roberts',
    getName: function () {
        return this.knownAS;
    }
};

var starsName = star.getName;

console.log(starsName(), star.getName());


### Answer: undefined 'Julia Roberts'
### We are get undefined because we are running the starsName variable
### first before we put the string Julia Roberts in the second part of the ### function. star.getName variable has the string value unlike the 
### starName() variable 

