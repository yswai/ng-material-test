let myFunc = function(name) {
    return {
        s: name,
        l: name + ' asdf'
    };
};

let myFunc2 = function() {
    return 'Func2';
};

let {s, l} = myFunc('IPG');

console.log('s = ' + s);
console.log('l = ' + l);

export default {
    myFunc1: myFunc,
    myFunc2: myFunc2
};