module.exports = {
    '@tags': ['google'],
    
    'Google advanced search: Eloan Musk' (browser) {
        const mainQuery = 'Elon Musk';
        const mainQueryInputSelector = 'input[name="as_q"]';

        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';

        const lastTimeDropdownOpenerSelector = '#as_qdr_button';
        const lastTimeDropdownValueSelector = '.goog-menuitem[value="m"]';

        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastTimeDropdownOpenerSelector)
            .click(lastTimeDropdownValueSelector)
            .saveScreenshot('tests_output/google.png')
    }
}