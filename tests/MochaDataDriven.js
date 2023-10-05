const Data = require("../Global/Data");

describe("Forms Suite", ()=> {
    Data.forEach(({testCase,password,username}) => {
           it(testCase, (client)=> {
            
            client.url('https://the-internet.herokuapp.com/');
            client.useXpath();
            client.click('/html/body/div[2]/div/ul/li[21]/a')
            client.setValue('//*[@id="username"]', username);
            client.setValue('//*[@id="password"]',password)
            client.click('/html/body/div[2]/div/div/form/button')
            // client.getText("/html/body/div[2]/div/div/h4", function (str) {
            //     assert.equal(str.value, "Welcome to the Secure Area. When you are done click logout below.", "on secure area page");
            // })
           });
    });
});



