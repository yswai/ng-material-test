let myFunc = function(name) {
    return {
        s: name,
        l: name + ' sohai'
    };
};

let {s, l} = myFunc('IPG');

console.log('s = ' + s);
console.log('l = ' + l);

export default myFunc;