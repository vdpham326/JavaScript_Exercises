// Write a function, finalGrade(). It should:

// take three arguments of type number
// find the average of those three numbers
// return the letter grade (as a string) that the average corresponds to
// return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
// 0-59 should return: 'F'
// 60-69 should return: 'D'
// 70-79 should return: 'C'
// 80-89 should return: 'B'
// 90-100 should return: 'A'

// Write your function here:
const finalGrade = (n1, n2, n3) => {
    if ((n1 < 0 || n1 > 100) || (n2 < 0 || n2 > 100) || (n3 < 0 || n3 > 100)) {
      return "You have entered an invalid grade.";
    }
    const average = (n1 + n2 + n3) / 3;
    if (average >= 90) {
      return "A";
    } else if (average >= 80) {
      return "B";
    } else if (average >= 70) {
      return "C";
    } else if (average >= 60) {
      return "D";
    } else if (average >= 0) {
      return "F";
    }
  };
  
//   The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, 
//   representing the person’s age, and returns the boolean true if they are 18 years old or older, 
//   and the boolean false if they are not.
  
const canIVote = (age) => {
    if (age >= 18) {
      return true;
    }
    return false;
};

// Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two 
// strings are the same and 'You disagree!' if the two strings are different. 
// Write your function here:
const agreeOrDisagree = (s1, s2) => {
    return s1 === s2 ? "You agree!" : "You disagree!";
  };
  
//   Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

//   Here are the classifications:
//   0-3 should return 'baby'
//   4-12 should return 'child'
//   13-19 should return 'teen'
//   20-64 should return 'adult'
//   65-140 should return 'senior citizen'
//   If the number is less than 0 or greater than 140, the program should return 'This is not a valid age' 

// Write your function here:
const lifePhase = (age) => {
    if (age < 0 || age > 140) {
      return "This is not a valid age";
    } else if (age <= 3) {
      return "baby";
    } else if (age <= 12) {
      return "child";
    } else if (age <= 19) {
      return "teen";
    } else if (age <= 64) {
      return "adult";
    } else if (age <= 140) {
      return "senior citizen";
    }
  };
  
//   Write a function, reportingForDuty(), that has two string parameters, rank and lastName, 
//   and returns a string in the following format: ‘rank lastName reporting for duty!’
function reportingForDuty(rank, lastName) {
    return rank + " " + lastName + " reporting for duty!";
}
  
const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
      let die1 = Math.floor(Math.random() * 6 + 1);
      let die2 = Math.floor(Math.random() * 6 + 1);
      return die1 + die2;
}
  
/*Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, calculateWeight(). It should:

have two parameters: earthWeight and planet
expect earthWeight to be a number
expect planet to be a string
return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.' */

function calculateWeight (earthWeight, planet) {
    switch (planet) {
      case "Mercury":
        return earthWeight * 0.378;
      case "Venus":
        return earthWeight * 0.907;
      case "Mars":
        return earthWeight * 0.377;
      case "Jupiter":
        return earthWeight * 2.36;
      case "Saturn":
        return earthWeight * 0.916;
      default:
        return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn."; 
    }
  };

//   Write a function, truthyOrFalsy(), that takes in any value and returns true if that 
//   value is truthy and false if that value is falsy.

function truthyOrFalsy (val) {
    if (val) {
      return true;
    }
    return false;
};


// A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.
// Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.
// Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.
const numImaginaryFriends = (number) => {
    return Math.ceil(number * .25);
};


// Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

// If the year is in the future, you should return a string in the following format:

// 'You will be [calculated age] in the year [year passed in]'
// If the year is before they were born, you should return a string in the following format:

// 'The year [year passed in] was [calculated number of years] years before you were born'
// If the year is in the past but not before the person was born, you should return a string in the following format:

// 'You were [calculated age] in the year [year passed in]'

const howOld = (age, year) => {
    // The following two lines make it so that our function always knows the current year.
        let dateToday = new Date();
        let thisYear = dateToday.getFullYear();

      
        const yearDifference = year - thisYear
        const newAge = age + yearDifference
        if (newAge > age) {
            return `You will be ${newAge} in the year ${year}`
        } else if (newAge < 0) {
            return `The year ${year} was ${-newAge} years before you were born`
        } else {
            return `You were ${newAge} in the year ${year}`
        }
    }
/*Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

tipCalculator('good', 100) // Should return 20 */

const tipCalculator = (quality, total) => {
    switch (quality) {
      case "bad":
        return total * .05;
      case "ok":
        return total * .15;
      case "good":
        return total * .20;
      case "excellent":
        return total * .30;
      default:
        return total * .18;
    };
  };
  
//   Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

//   'shrug' should return '|_{"}_|'
//   'smiley face' should return ':)'
//   'frowny face' should return':('
//   'winky face' should return ';)'
//   'heart' should return '<3'
//   any other input should return '|_(* ~ *)_|'

const toEmoticon = meaning => {
    switch (meaning) {
        case 'shrug':
            return '|_{"}_|'
        case 'smiley face':
            return ':)';
        case 'frowny face':
            return ':(';
        case 'winky face':
            return ';)';
        case 'heart':
            return '<3';
        default:
            return '|_(* ~ *)_|';
    }
}

// As a function declaration: 
function toEmoticon(meaning) {
    switch (meaning) {
        case 'shrug':
            return '|_{"}_|'
        case 'smiley face':
            return ':)';
        case 'frowny face':
            return ':(';
        case 'winky face':
            return ';)';
        case 'heart':
            return '<3';
        default:
            return '|_(* ~ *)_|';
    }
}

// Create a function colorMessage() that takes 2 string arguments, favoriteColor and shirtColor.

// If the value of favoriteColor is the same as the value of shirtColor return the string 'The shirt is your favorite color!'.

// If not, return the string 'That is a nice color.'
// function colorMessage(favoriteColor, shirtColor) {
//     return favoriteColor === shirtColor ? "The shirt is your favorite color!" : "That is a nice color";
//   }
  
//   console.log(colorMessage("blue", "green"));
//   console.log(colorMessage("yellow", "yellow"));

//   Create a function numberDigits() that takes the variable x as its only parameter.

//   If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x. For example, numberDigits(5) would return:
  
//   'One digit: 5'
//   If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x. For example, numberDigits(12) would output:
  
//   'Two digits: 12'
//   Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x. For example, numberDigits(-202) would output:
  
//   'The number is: -202'
  
// Create function here 
const numberDigits = (x) => {
    if (x >= 0 && x <= 9) {
      return `One digit: ${x}`;
    } else if (x <= 99) {
      return `Two digits: ${x}`;
    } else {
      return `The number is: ${x}`;
    }
  };