module.exports = {
    '@tags': ['google-po'],
    
    'Google advanced search: Elon Musk' (browser) {
        const mainQuery = 'Elon Musk';
        const page = browser.page.googleAdvancedSearch();

        const resultsQueryPageSelector = `textarea[name="q"][value="${mainQuery}"]`
        
        debugger;

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastTimeDropdown', 'm')
            .search()

        browser
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
            .assert.urlContains('as_qdr=m', 'Params: Time perios is past month')

        browser.expect.element(resultsQueryPageSelector).to.be.visible;
        
        browser.saveScreenshot('tests_output/google.png');
    }
}