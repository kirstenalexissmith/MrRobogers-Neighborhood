# _{Mr.Roboger's Neighborhood}_

#### By _**{Kirsten Smith}**_

#### _{A webpage that substitutes number with phrases}_

## Technologies Used

* _VS Code_
* _HTML_
* _CSS_
* _Javascript_


## Description

_{This webpage will ask the user to enter a number. It then takes this input and outputs an array of numbers that replaces the numbers 1-3 with different phrases.}_

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory. 
* Open `index.html` in your browser. 

## Tests
```
Describe: getNumber();

Test: "It will accept an integer and output an array of strings from "0" to the given integer"
Code: getNumber(4);
Expect: [0, 1, 2, 3, 4]

Describe: subNumber();

Test: "It will replace the number "3" within a given array to the phrase "Wont you be my neighbor?"
Code: subNumber([0, 1, 2, 3, 4, 5])
Expect:  ["0", "Beep", "Boop!", "Won't you be my neighbor?!", "4", "5"]

Test: "It will replace the number "2" within a given array to the phrase "Boop!"
Code: subNumber([0, 1, 2, 3, 4, 5])
Expect:  ["0", "Beep", "Boop!", "Won't you be my neighbor?!", "4", "5"]

Test: "It will replace the number "1" within a given array to the phrase "Beep"
Code: subNumber([0, 1, 2, 3, 4, 5])
Expect:  ["0", "Beep", "Boop!", "Won't you be my neighbor?!", "4", "5"]

```
## Known Bugs

* No known bugs


## License

_[MIT](LICENSE.txt)_
_Copyright (c) _2023_ _Kirsten Smith_
