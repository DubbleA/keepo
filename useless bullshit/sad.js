let regex = /(?:function|var|let|const)\s+(\w+)\s*=?\s*(?:function)?\s*\(([^\(\)]*)\)\s*(?:=>)?\s*/g

let strs = ['let oof = function()','let oof = () =>','function oof()','function oof(a, b, c)']

strs.forEach(str => console.log(str.replace(regex, 'window.$1 = ($2) => ')))