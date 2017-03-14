const isPerfectSquare = (number) => {
    for (let sum = 0, odd = 1; sum < number; odd += 2) {
        sum += odd;
        if (sum === number) { return true; }
    }
    return false;
}

console.log(isPerfectSquare(144));