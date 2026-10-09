
function truncateString(str, maxLength) {
    if (str.length >= maxLength) {
        return str.substring(0, maxLength) + "..."
    }
    return str
}

console.log(truncateString("Hello world", 8));



