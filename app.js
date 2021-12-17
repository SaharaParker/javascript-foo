const price_a = 0.52;
const price_b = 0.59;
console.log((price_b - price_a)/price_a * 100)

function calcInflate(price_a,price_b){
    console.log((price_b - price_a)/price_a * 100)


}


function calcInflateUpdated(price_a,price_b, productName = "Milk") {
    const inflationPercent = (price_b - price_a)/price_a * 100;
    const inflationPercent2 = Math.round(inflationPercent,2);
    console.log("Inflation Rate of " + productName + " is " + inflationPercent2 + "%")

    }

    calcInflateUpdated(price_a,price_b,"Milk")