const reverseString = (s) => {
    let reString = '';
    for (let i  = s.length - 1; i >= 0; --i) {
        reString += s[i];
    }
    return reString;
    // s.split("").reverse().join("") bad;
}

console.log(reverseString("hello"));