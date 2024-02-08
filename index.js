function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return 'Invalid Number';
    }
    else {
        const totalSale = ticketSale * 120;
        const costings = (500 + (8 * 50));
        const profitOrLoss = totalSale - costings;
        return profitOrLoss;
    }
}
function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid';
    }
    else {
        let makeStrLowerCase = name.toLowerCase();
        let wantedStr = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        for (let i = 0; i <= wantedStr.length; i++) {
            const element = wantedStr[i];
            if (makeStrLowerCase.endsWith(element) === true) {
                return "Good Name";
            }
        }
        return "Bad Name";
    }
}
function deleteInvalids(array) {
    if (Array.isArray(array) !== true) {
        return "Invalid Array"
    }
    else {
        const onlyNumber = [];
        for (let i = 0; i <= array.length; i++) {
            const element = array[i];
            if (typeof element === 'number' && !isNaN(element)) {
                onlyNumber.push(element);
            }
        }
        return onlyNumber;
    }
}
function password(obj) {
    const objLength = Object.keys(obj).length;
    if (objLength !== 3) {
        return 'Invalid';
    }
    else {
        const { name, birthYear, siteName } = obj;
        const siteNameCapitalized = siteName.charAt(0).toUpperCase() + siteName.slice(1);
        const passwordGenerated = `${siteNameCapitalized}#${name}@${birthYear}`;
        return passwordGenerated;
    }
}
// check deleteInvalids
console.log(password({ name: 'toky', siteName: 'Facebook' }));
function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) !== true && typeof livingCost !== 'number') {
        return 'invalid input';
    }
    else {
        const tax = 600;
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i];
            if (element >= 3000) {
                element = element - tax;
                sum += element;
            }
            else {
                sum += element;
            }
        }
        const userSavings = sum - livingCost;
        if (userSavings >= 0) {
            return userSavings;
        }
        else {
            return 'earn more';
        }
    }
}
