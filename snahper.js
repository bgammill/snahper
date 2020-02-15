/*
 * Loads a link, pastes a password into the password field, presses submit.
 * Then takes the resulting link and logs it to the console.
 */

const puppeteer = require('puppeteer');

// get the user-supplied args.
const args = {
    url: process.argv[2],
    password: process.argv[3]
};
// did we not get a `url` argument?
if (!args.url) {
    throw 'URL required as first parameter.';
}
// did we not get a `password` argument?
if (!args.password) {
    throw 'Password required as second parameter.';
}

// set up the selectors we will be using.
const selectors = {
    'password': 'input[type=password]',
    'submit': 'input[type=submit]'
};

// small function for logging a supplied link.
const printLink = (link) => {
    console.log('\n', link);
};

(async() => {
    // init a link var to output.
    var link;

    // launch a browser instance.
    const browser = await puppeteer.launch();
    // set a callback for logging the link after the script is finished.
    browser.on('disconnected', () => {
        // the script is finished, log the link.
        printLink(link);
    });

    // set up a page instance.
    const page = await browser.newPage();
    // go to url arg
    await page.goto(args.url);

    // set cursor to password input box.
    await page.focus(selectors.password);
    // type the password arg.
    await page.keyboard.type(args.password);
    // click the submit button.
    await page.click(selectors.submit);

    // get the link href.
    link = await page.$eval('#content > center > p > a', a => a.getAttribute('href'));

    // close the browser
    await browser.close();
})();