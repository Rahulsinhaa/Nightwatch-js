describe('Assessment of knoldus', () => {

    let originalWindowHandle;

    before((client) => {
        //open google before th class a test suit is called
        client
        .url('https://www.google.com/')
        .window.maximize()
    });

  
    it('Search for nashthech global', (client) => {
        client.setValue('#APjFqb', 'nashtechglobal.com')
            .click('body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ')
            .click('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b')
            .pause(1 * 1000)
            //verifying that the value of the first search reasult is nashtech global)
            .getText('#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3', function name(text) {
                expect(text.value).to.equal('NashTech: Global Technology Consulting Services');
            })
    });

    it('opening the carrer page on nashtech global', (client) => {
        client
            .click('#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a')
            .click('#cmplz-cookiebanner-container > div > div.cmplz-header > div.cmplz-close > svg > path')
            .click('#menu-item-341 > a')
            .click('#post-843 > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-722c5ff3.elementor-section-height-min-height.gradPrplRed.elementor-section-boxed.elementor-section-height-default.elementor-section-items-middle > div > div > div > div > div > div > a')
            .pause(2 * 1000)
    });

    it('verifying that the carrie page is opend', (client) => {
        //handelling the new carrer page
        // Wait for the new tab to load
        client
        .window.getAllHandles(function (result) {
            var handle = result.value[1];
            browser.window.switch(handle);
        })
            // we can now interact with elements on the new tab
            .pause(2 * 1000).getTitle(function name(title) {
                //verifying that the carrie page is opend
                expect(title).to.equal('Careers | NashTech');
            })
    });


    it('perfiroing search on nashtech gloabl career page', (client) => {
        client
            .click('#select2-frm-job-search-job-competence-container')
            //css selector was not deteced  so i used x-path 
             .useXpath()
            .click('/html/body/span/span/span[2]/ul/li[2]')
            .click('/html/body/div[2]/div/section[1]/div/div/div/form/span[2]/span[1]/span/span[1]')
            .click('/html/body/span/span/span[2]/ul/li[5]')
            .click('/html/body/div[2]/div/section[1]/div/div/div/form/button')
    });


    it('verifing the first job title ', (client) => {
        client.getText('/html/body/div[2]/section[3]/div/div[2]/div/div[1]/a', function name(text) {
            expect(text.value).to.equal('Senior Software Consultant .NET');
        })
    });

    
});