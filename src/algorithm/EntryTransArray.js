export default function entryTransArray(entry) {
    const regexs = [/([\u002a\u002b\u002d\u002f])/g, /([\u0028])/g, /([\u0029])/g];

    return entry
        .replace(regexs[0], " $1 ")
        .replace(regexs[1], "$1 ")
        .replace(regexs[2], " $1")
        .split(' ')
        .map(element => isNaN(element) ? element : element * 1);
};
