//demo.js is a JS file under tests folder
module.exports = {
    'My first test case' (browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname')
            .assert.textContains('.hnname', 'Hacker News');
    },
}