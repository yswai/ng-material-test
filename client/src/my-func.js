let myFunc1 = function(name) {
    return {
        s: name,
        l: name + ' asdf'
    };
};

let myFunc2 = function() {
    return 'Func2';
};

let {s, l} = myFunc1('IPG');

console.log('s = ' + s);
console.log('l = ' + l);

export { myFunc1, myFunc2 }