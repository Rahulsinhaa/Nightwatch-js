module.exports = {
    "css and xpath": function (browser) {
        browser.maximizeWindow();

        browser.url('http://tutorials.actionqa.com/yt/nw/locator-01.html')
        browser.pause(1 * 1000)


        const cssSelector = '#text-input'
        const xpathSlelector = '//*[@id="text-input"]'

        // browser.setValue(cssSelector, "This is css");
        browser.useXpath()
        browser.setValue(xpathSlelector, "this is x path");
         browser.pause(3 * 1000);


        browser.useCss();
        browser.clearValue(cssSelector)
        browser.setValue(cssSelector, "this is css path");
        browser.pause(3 * 1000);



    },


    "the next test":function(browser){
        browser.maximizeWindow();

        browser.url('http://tutorials.actionqa.com/yt/nw/locator-01.html')
        browser.pause(1 * 1000)


        const cssSelector = '#text-input'
        const xpathSlelector = '//*[@id="text-input"]'



        browser.useCss();
        browser.clearValue(cssSelector)
        browser.setValue(cssSelector, "this is css path");
        browser.pause(3 * 1000);

// 1. we can haev default xpath selector we can go the conpfig file and  set xpath as true in default setting 
// 2. 

    }
}