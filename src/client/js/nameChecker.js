function checkForName(inputText) {
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        console.log("Welcome, Captain!");
        return 'Captain';
    }
    return 'User';
}

export { checkForName }
