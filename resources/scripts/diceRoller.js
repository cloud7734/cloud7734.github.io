const rollTheDice = () => {
    let quantity = 0;
    let typeOfDice = '';
    let modifier = 0;
    const diceArr = [];
    let totalResult = 0;

    quantity = document.getElementById("quantity").value;
    typeOfDice = document.getElementById("typeOfDice").value;
    modifier = document.getElementById("modifier").value;

    let i = 0;
    do {
        diceArr[i] = rollOneDie(typeOfDice);
        console.log(diceArr[i]);
        i++;
    } while (i < quantity);

    for (let j = 0; j < diceArr.length; j++) {
        totalResult += diceArr[j];
    }

    totalResult += Number(modifier);

    document.getElementById("results").innerHTML = "Your total is " + totalResult;
}

const rollOneDie = type => {
    let d = 0;
    switch (type) {
        case 'd2':
            d = 2;
            break;
        case 'd4':
            d = 4;
            break;
        case 'd6':
            d = 6;
            break;
        case 'd8':
            d = 8;
            break;
        case 'd10':
            d = 10;
            break;
        case 'd12':
            d = 12;
            break;
        case 'd20':
            d = 20;
            break;
        case 'd100':
            d = 100;
            break;
    }
    return Math.ceil(Math.random()*d);
}