
function truncateString(str, maxLength) {
    if (str >= maxLength) {
        return str
    } else {
        return str.substring(0, maxLength)+"..."
    }
}

console.log(truncateString("Hello world", 8));



