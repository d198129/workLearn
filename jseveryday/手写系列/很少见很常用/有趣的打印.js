const colorMap = {
    1: 'color: red;font-size:1.5em;',
    2: 'color: yellow;font-size:1.5em;',
    3: 'color: green;font-size:1.5em;',
    4: 'color: blue;font-size:1.5em;',
    5: 'color: pink;font-size:1.5em;',
    6: 'color: chartreuse;font-size:1.5em;'
}

function logg(data, number) {
    console.log("%c数据: %o", colorMap[number], data);
}

let a = 123;
let b = '123';
let c = true;
let d = {a: 123};
let e = [1, 2, 3, 4];
logg(a, 1)
logg(b, 2)
logg(d, 3)
logg(d, 4)
logg(e, 5)