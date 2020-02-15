# snahper
An excuse to play with puppeteer. Loads a link, pastes a password into the password field, presses submit. Then takes the resulting link and logs it to the console.

## Requirements
* Node v13.8.0
* puppeteer

## Installation
1. `git clone https://github.com/bgammill/snahper.git && cd snahper`
2. `npm install -g puppeteer`

## Usage
```
$ node snahper.js 'https://examplelink.com' 'examplepassword'

$ https://exampleoutputlink.com
```
