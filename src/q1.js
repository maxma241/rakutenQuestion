const reverseString = (s) => {
    let reString = '';
    for (let i  = s.length - 1; i >= 0; --i) {
        reString += s[i];
    }
    return reString;
    // s.split("").reverse().join("") bad;
}

console.log(reverseString("hello"));

const reverseStringRecursive = (str) => {
    if (str === "") {
        return "";
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseStringRecursive("abc"));