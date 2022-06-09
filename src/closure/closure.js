//
const moneybox = (coins) =>{
 var savecoins = 0;
 savecoins += coins;
 console.log(`MoneyBox: $${savecoins}`)
}

moneybox(5)
moneybox(10)

//no guarda los elementos
//closuer combina una fucntion y el ambito lexcico donde fue formado

const moneyBox = () =>{
    var savecoins = 0;
    const countcoins = (coins) =>{
    savecoins += coins;
    console.log(`MoneyBox: $${savecoins}`)
    }
    return countcoins;
}
let myMoneybox = moneyBox();

myMoneybox(4);
myMoneybox(8);
myMoneybox(12);


