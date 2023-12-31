const grugComponents = require('./compiler.js');

const inputHtml = '<my-component name="Alice"></my-component>';

const processedHtml = grugComponents.compileHtml(inputHtml);
console.log('Processed HTML:', processedHtml);

grugComponents.compileHtmlFromFile('./test.html', (processedFileHtml) => {
    console.log('Processed File HTML:', processedFileHtml);
});