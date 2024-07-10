module.exports = {
    '@tags': ['google'],
    
    'Google advanced search: Elon Musk' (browser) {
        const mainQuery = 'Elon Musk';
        const mainQueryInputSelector = 'input[name="as_q"]';

        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';

        const lastTimeDropdownOpenerSelector = '#as_qdr_button';
        const lastTimeDropdownValueSelector = '.goog-menuitem[value="m"]';

        const submitButtonSelector = '.jfk-button[type="submit"]'
        const resultsQueryPageSelector = `textarea[name="q"][value="${mainQuery}"]`
        
        debugger;

        // NOTA: cada command se pone en una cola, entonces si todo lo primero se ejecuta de manera asincrona, es decir si debuggeo, va de la linea de url a             browser.expect.element(resultsQueryPageSelector).to.be.visible;
        // para eso se usa el perform() enmedio, si quisiera debuggear ahi
        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            // .click(languageDropdownOpenerSelector)
            // .click(languageDropdownValueSelector)
            .selectFilter()
            .click(lastTimeDropdownOpenerSelector)
            .click(lastTimeDropdownValueSelector)
            .perform(() => { debugger; })
            .click(submitButtonSelector)
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
            .assert.urlContains('as_qdr=m', 'Params: Time perios is past month')
            //test the visibility element by adding an extra value attribute on the element type
            browser.expect.element(resultsQueryPageSelector).to.be.visible;
            browser.saveScreenshot('tests_output/google.png');
    }
}