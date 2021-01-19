// concurrency conv exercise 

const currencies = [ 
{
    "name":"Euro",
    "stdConv":0.82
},    {
    "name":"Yen",
    "stdConv":103
},    {
    "name":"Rupee",
    "stdConv":73.18
},    {
   "name":"Pound",
    "stdConv":0.73
},    {
    "name":"USD",
    "stdConv":1
}
]

console.log("Welcome! This is a cheap program to convert your currencies to other currencies")

console.log("What currency would you like to convert?")
//ASK USER INPUT // NOT CURRENTLY PROGRAMMED
let conversionCurrency = "Yen"    //*****  ❗️

console.log("How much of the above currency do you have to convert?")
//ASK USER INPUT // NOT CURRENTLY PROGRAMMED

let conversionAmount = 300   //**** ❗️
console.log("currencies & current rates:", currencies)

let conversionToCurrency = "Rupee"  //**** ❗️

currencies.forEach (currency => console.log ('#2',currency.name, currency.stdConv, (currency.stdConv * conversionAmount)))

function usdAmount ( cArray, curType, curAmount ) {
let cR = cArray.find(cR => cR.name === curType)
    console.log("#4: convRate is ", cR.stdConv, "and amount is", curAmount, "in ", conversionCurrency)
    return ((1/cR.stdConv)*curAmount) 
}

function  usdAmountToNewCurrency (cArray, conversionToCurrency, amountInUSD) {
    let cRR = cArray.find(cRR => cRR.name === conversionToCurrency)
    console.log("#5: convRate is ", cRR.stdConv, amountInUSD)
    return ((cRR.stdConv) * amountInUSD) 
}    

let cInUSD = usdAmount ( currencies, conversionCurrency, conversionAmount ) 
console.log("intermediate USD is", cInUSD)
console.log (conversionCurrency, conversionAmount)

let fAmountInNewCur = usdAmountToNewCurrency(currencies, conversionToCurrency, cInUSD)
console.log(`amt: ${conversionAmount}, currency Type ${conversionCurrency}, final amount: ${fAmountInNewCur}, ${conversionToCurrency}`)
