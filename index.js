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