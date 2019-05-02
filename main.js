const pdfFill = require('pdf-fill-form')
const pdf = require('pdf-parse')
const fs = require('fs');

let dataBuffer = fs.readFileSync('/Users/jasonliu/git/JanaTech/general/Form 3 Parent-Guardian Approval for Trips MCPS Transportation is provided 555-6--FY19.pdf');

pdf(dataBuffer).then(function(data) {

    // number of pages
    console.log(data.numpages);
    // number of rendered pages
    console.log(data.numrender);
    // PDF info
    console.log(data.info);
    // PDF metadata
    console.log(data.metadata);
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    console.log(data.version);
    // PDF text
    console.log(data.text);

});
/*
let pdfFields = pdfFill.readSync('/Users/jasonliu/git/JanaTech/general/Form 3 Parent-Guardian Approval for Trips MCPS Transportation is provided 555-6--FY19.pdf')
// console.log(pdfFields)
pdfFill.read('/Users/jasonliu/git/JanaTech/general/Form 3 Parent-Guardian Approval for Trips MCPS Transportation is provided 555-6--FY19.pdf')
.then(function(result) {
    console.log(result);
}, function(err) {
    console.log(err);
});
*/
