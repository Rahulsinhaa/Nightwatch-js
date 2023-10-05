
const mocha = require('mocha');
describe('my first test', (client) => {


    //     it('my first elemnt', function(client){
    //    client.url('https://the-internet.herokuapp.com/');
    //     })
    // it('set and clear value ', (client) => {
    //     client.url('https://the-internet.herokuapp.com/');
    //         client.useXpath();
    //         client.click('/html/body/div[2]/div/ul/li[21]/a')
    //         client.setValue('//*[@id="username"]','rahul sinhsa -----');
    //         client.clearValue('//*[@id="username"]')

    // });

    it('navigate', (client) => {
        client.init('https://www.mozilla.org/en-US/firefox/')
            .url('https://www.youtube.com/')
            .back()
            client.pause()
    });
});
