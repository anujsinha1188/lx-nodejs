exports.getCapital = function (state) {
    switch (state) {
        case 'Karnataka': return "Bangalore";
        case 'Rajasthan': return "Jaipur";
        default: return "Invalid state name";
    }
}