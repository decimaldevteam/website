/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-template-curly-in-string */

const makeRegex = str => {
    var m = str.match(/(\/?)(.+)\1([a-z]*)/i);
    if (m[3] && !/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test(m[3]))  return RegExp(str);
    return new RegExp(m[2], m[3]);
};

const colorify = _ => {
    document.querySelectorAll('.type').forEach(x => {
        x.innerHTML = x.innerHTML
        .split('or').join('<strong>or</strong>')
        .split('string').join('<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a>')
        .replace('number', '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number">number</a>')
        .replace('boolean', '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a>')
        .replace('object', '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object">object</a>')
        .replace('any', '<font>any</font>')
        .replace('Promise', '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise">Promise</a>')
        .replace(typedefRegex, `<a href="/#/docs/typedef/$1">$1</a>`)
    });
};

window.addEventListener('load', () => {

    window.typedefRegex = makeRegex(`/(${Object.keys(window.docs.typedefs).join('|')})/g`);
    window.addEventListener('hashchange', colorify);
    colorify();

});