const { assert } = require("nightwatch");

module.exports = {
  
    beforeEach: (client) => {
        client.windowMaximize();
        client.url('https://www.keka.com/')
        console.log('before all the method')
        client.useXpath();
    },

        'form element click': (client) => {
            client.click('//*[@id="navbarCollapse"]/ul[2]/li[1]/a')
            client.click('/html/body/div/div[2]/div[1]/div[2]/form[2]/div/div[2]/div[2]/button')
            client.setValue('//*[@id="identifierId"]','rahul.sinha@knoldus.com')
            client.click('//*[@id="identifierNext"]/div/button')
           

 
        client.click('/html/body/header/nav/div/div[2]/ul[2]/li[1]/a')
        client.setValue('//*[@id="username"]', 'tomsmith');
        client.setValue('//*[@id="password"]', 'SuperSecretPassword!')
        client.click('/html/body/div[2]/div/div/form/button')
        client.getText("/html/body/div[2]/div/div/h4", function (str) {
            assert.equal(str.value, "Welcome to the Secure Area. When you are done click logout below.", "on secure area page");
        })
        // client.setValue('//*[@id="password"]/div[1]/div/div[1]/input','Rahul@123')
        // client.click('//*[@id="passwordNext"]/div/button')
        // client.click('//*[@id="yDmH0d"]/c-wiz/div/div[2]/div/div[1]/div/form/span/section[2]/div/div/section/div/div/div/ul/li[3]')
        // client.setValue('//*[@id="phoneNumberId"]',7645833848);
        // client.click('//*[@id="view_container"]/div/div/div[2]/div/div[2]/div/div[1]/div/div/button')
        // client.pause(10*1000)
        // client.click('//*[@id="view_container"]/div/div/div[2]/div/div[2]/div/div[1]/div/div/button')
        // client.pause()
        
    },
    'check url': (client) => {
        client.assert.urlEquals('https://the-internet.herokuapp.com/', 'the url is same ');
    },
    'click ob button': (client) => {
        client.click('/html/body/div[2]/div/ul/li[1]/a')
        const text = client.getText("/html/body/div[2]/div/div/h3", function (str) {
            // assert.equal(str.value, 'A/B Test Control', "both are equal");
        })
    },

    'form element click': (client) => {
        client.click('/html/body/div[2]/div/ul/li[21]/a')
        client.setValue('//*[@id="username"]', 'tomsmith');
        client.setValue('//*[@id="password"]', 'SuperSecretPassword!')
        client.click('/html/body/div[2]/div/div/form/button')
        client.getText("/html/body/div[2]/div/div/h4", function (str) {
            assert.equal(str.value, "Welcome to the Secure Area. When you are done click logout below.", "on secure area page");
        })
    },

    'check boxes': (client) => {
        client.click('/html/body/div[2]/div/ul/li[6]/a')
        client.click('/html/body/div[2]/div/div/form/input[1]')
    },

    'upload file': (client) => {
        client.click('//*[@id="content"]/ul/li[18]/a')
        client.uploadFile('//*[@id="file-upload"]', '/home/knoldus/vs code/nightWatchjs/tests/forms.test.js')
        client.click('//*[@id="file-submit"]')
        client.getText('//*[@id="content"]/div/h3', function name(str) {
            console.log(str.value)
            assert.equal(str.value, 'File Uploaded!', "both are equla");
            expect(str.value).to.be.a('String');
        })
    },

    'Hover an element ':(client)=>{
        client.click('//*[@id="content"]/ul/li[25]/a');
        moveToElement('/html/body/div[2]/div/div/div[1]/img');
    },

    
    after: () => {
        console.log("all test case has passesd")
    }


}