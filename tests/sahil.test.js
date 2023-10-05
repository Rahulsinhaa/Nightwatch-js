module.exports = {

    "firstTest": (browser) => {
        browser.maximizeWindow();
        browser.url('https://blacklivesmatter.com/')
        browser.click("#menu-primary-menu > li.menu-highlight.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-5749.nav-item > a")
        browser.pause(3 * 1000)
    },


 

}






