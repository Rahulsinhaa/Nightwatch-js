module.exports={

    "get table rows": async function (browser){
        browser.url("https://tutorials.actionqa.com/nwind/elements.html");
        const tableRows= await browser.elements("css selector","tr");
        console.log("rows", tableRows.length);

    },

};