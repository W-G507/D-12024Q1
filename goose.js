const goose = (goose) => {
    const ex_names = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    if (goose > 26) {
        return "Z"
    }
    return ex_names[goose - 1]
}

console.log(goose(4));