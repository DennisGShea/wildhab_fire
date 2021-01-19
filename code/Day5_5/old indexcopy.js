//   all conversations in currConvRate are to USD   

const currConvRate = [       
    {
        "name":"Euro",
        "xchRate":0.82
    },    {
        "name":"Yen",
        "xchRate":103
    },    {
        "name":"Rupee",
        "xchRate":73.18
    },    {
       "name":"Pound",
        "xchRate":0.73
    },    {
        "name":"USD",
        "xchRate":1
    }
]


console.log("Welcome! This is a cheap program to convert your currencies to other currencies")
console.log("What currency would you like to convert?")

//ASK USER INPUT // METHOD OF DOING SO NOT CURRENTLY PROGRAMMED
let currencyName = "Yen"

console.log("How much of the above currency do you have to convert?")
//ASK USER INPUT // METHOD OF DOING SO NOT CURRENTLY PROGRAMMED
let amountToExchange = 200 ;


    






let inUSD = currConvRate.filter(value => (value.name === currencyName) {
        console.log(value.name, value.xchRate)
     Return (value.xchRate)
}


console.log(amountToExchange * currConvRate())

//function convertToUSD (currencyName, amountToExchange) 

console.log(currConvRate)

console.log(currencyName, amountToExchange)
     
    /* 
     if (currencyName)
     console.log ( ` currConvRate.currency   `                             )
  return 

let intermediary = currencies.find(money => money.name === conversionCurrency)

let intermediaryAmount = intermediary.stdconv * conversionAmount

currencies.forEach(element => console.log(`${amountToExchang} of ${conversionCurrency} is equal to ${1/(element.stdconv/intermediaryAmount)} of ${element.name}`))




.forEach(member => {
    let prefix = (member.gender === 'male') ? 'sir' : 'lady' 
    let greeting = `Hello ${prefix} ${member.name}`
    console.log(greeting)
*/


