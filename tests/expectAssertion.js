module.exports = {
    "Expect test case": (client) => {
        client
            .url('https://www.npmjs.com/package/mocha')
        client.useXpath()
        client.click("/html/body/div/div/div[2]/header/div[3]/div/div[2]/form/button");
        expect.element('/html/body/div/div/div[2]/header/div[3]/div/div[2]/form/button').text.equal('Search')

    }
}


// two run the command ...
//    ./node_modules/.bin/nightwatch -t ./tests/expectAssertion.js -e chrome