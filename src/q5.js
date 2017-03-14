const specialSum = (n1, n2) => {
    while (n2 !== 0) {
        let carryNum = n1 & n2; //get進位bits
        n1 = n1 ^ n2; //加起來
        n2 = carryNum << 1; //進位
    }
    return n1;
}

console.log(specialSum(3, 663));